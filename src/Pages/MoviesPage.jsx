import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import MoviesList from 'components/MoviesList/MoviesList';
import SearchForm from 'components/SearchForm/SearchForm';
import { STATUS } from 'utils/constants';
import { fetchMovies } from 'utils/api';
import { toast } from 'react-hot-toast';
import { MainContainer } from 'components/MoviesList/MoviesList.styled';

const MoviePage = () => {
  // const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(STATUS.IDLE);
  const [searchParams, setSearchParams] = useSearchParams();
  // const queryMovie = searchParams.get('query') ?? '';
  const { query } = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );

  useEffect(() => {
    if (!query) return;
    const controller = new AbortController();

    async function getMoviesTrend() {
      try {
        setStatus(STATUS.PENDING);
        const { results } = await fetchMovies({
          controller,
          fetchParams: 'search/movie',
          query,
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

    if (query) getMoviesTrend();

    return () => {
      controller.abort();
    };
  }, [query]);

  function getSimpleData(data) {
    return data.map(({ id, title }) => {
      return { id, title };
    });
  }

  return (
    <MainContainer>
      <SearchForm setSearchParams={setSearchParams} />
      {status === STATUS.RESOLVED && !!movies.length && (
        <MoviesList movies={movies} />
      )}
    </MainContainer>
  );
};

export default MoviePage;
