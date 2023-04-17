import { MainContainer, MovieTrendLink, MoviesTrendItem, MoviesTrendList, TitleHome } from 'components/MoviesList/MoviesList.styled';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useLocation } from 'react-router-dom';
import { fetchMovies } from 'utils/api';
import { STATUS } from 'utils/constants';

const HomePage = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(STATUS.IDLE);

  useEffect(() => {
    const controller = new AbortController();

    async function getMoviesTrend() {
      try {
        setStatus(STATUS.PENDING);
        const { results } = await fetchMovies({
          fetchParams: 'trending/movie/day',
          controller,
        });
        if (results.length === 0) {
          setStatus(STATUS.RESOLVED);
          return toast.error('Nothing found!');
        }
        setMovies(getSimpleData(results));
        setStatus(STATUS.RESOLVED);
      } catch (error) {
        if (error.message !== 'canceled') {
          setStatus(STATUS.ERROR);
          toast.error(error.message);
        }
      }
    }

    getMoviesTrend();

    return () => {
      controller.abort();
    };
  }, []);

  function getSimpleData(data) {
    return data.map(({ id, title }) => {
      return { id, title };
    });
  }

  return (
    <MainContainer>
      <TitleHome>Trending today</TitleHome>
      {status === STATUS.RESOLVED && (
        <MoviesTrendList>
          {movies.map(({ id, title }) => {
            return (
              <MoviesTrendItem key={id}>
                <MovieTrendLink to={`movies/${id}`} state={{ from: location }}>
                  {title}
                </MovieTrendLink>
              </MoviesTrendItem>
            );
          })}
        </MoviesTrendList>
      )}
    </MainContainer>
  );
};

export default HomePage;
