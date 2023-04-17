import { Suspense, useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import BackLink from 'components/BackLink/BackLink';
import MovieInfo from 'components/MovieInfo/MovieInfo';
import { STATUS } from 'utils/constants';
import { fetchMovies } from 'utils/api';
import { MainContainer } from 'components/MoviesList/MoviesList.styled';

const MovieDetails = () => {
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');
  const [status, setStatus] = useState(STATUS.IDLE);
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    const controller = new AbortController();

    async function getMovieInfo() {
      try {
        setStatus(STATUS.PENDING);
        let results = await fetchMovies({
          controller,
          fetchParams: `movie/${movieId}`,
        });
        if (results.length === 0) {
          setStatus(STATUS.RESOLVED);
          return toast.error('Nothing found!');
        }
        setMovie(results);
        setStatus(STATUS.RESOLVED);
      } catch (error) {
        if (error.message !== 'canceled') {
          setStatus(STATUS.ERROR);
          toast.error(error.message);
        }
      }
    }

    if (movieId) getMovieInfo();

    return () => {
      controller.abort();
    };
  }, [movieId]);

  return (
    <MainContainer>
      <BackLink to={backLinkHref.current}>Go back</BackLink>
      {status === STATUS.RESOLVED && <MovieInfo movie={movie} />}
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>{' '}
    </MainContainer>
  );
};

export default MovieDetails;
