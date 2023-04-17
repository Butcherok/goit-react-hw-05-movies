import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import { fetchMovies } from 'utils/api';
import { STATUS } from 'utils/constants';
import { CastChar, CastContainer, CastItem, CastList, CastName } from './MovieCast.styled';

const MovieCast = () => {
  const { movieId } = useParams();
  const [status, setStatus] = useState(STATUS.IDLE);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    if (!movieId) return;
    const controller = new AbortController();

    async function getMovieCast() {
      try {
        setStatus(STATUS.PENDING);
        let {cast} = await fetchMovies({
          controller,
          fetchParams: `movie/${movieId}/credits`,
        });
        if (cast.length === 0) {
          setStatus(STATUS.RESOLVED);
          return toast.error('Nothing found!');
        }
        setCast(getSimpleCast(cast));
        setStatus(STATUS.RESOLVED);
      } catch (error) {
        if (error.message !== 'canceled') {
          setStatus(STATUS.ERROR);
          toast.error(error.message);
        }
      }
    }

    if (movieId) getMovieCast();
    scroll.scrollMore(500);

    return () => {
      controller.abort();
    };
  }, [movieId]);

  const getSimpleCast = cast =>
    cast.map(({ id, name, original_name, character, profile_path }) => {
      const profile = profile_path
        ? `https://image.tmdb.org/t/p/w500/${profile_path}`
        : 'https://placehold.co/80x100/png';
      const char = !character
        ? `information is not available`
        : `${character}` ;
      return {
        id,
        name,
        original_name,
        char,
        profile,
      };
    });

  return (
    <CastContainer>
      {status === STATUS.RESOLVED && !!cast.length && (
        <CastList>
          {cast.map(({ id, name, original_name, char, profile }) => (
            <CastItem key={id}>
              <img src={profile} alt={name} width="180" height="270" />
              <CastName>{original_name}</CastName>
              <CastChar>Character: {char}</CastChar>
            </CastItem>
          ))}
        </CastList>
      )}
    </CastContainer>
  );
};

export default MovieCast;
