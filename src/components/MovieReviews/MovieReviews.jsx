import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import { fetchMovies } from 'utils/api';
import { STATUS } from 'utils/constants';

const MovieReviews = () => {
  const { movieId } = useParams();
  const [status, setStatus] = useState(STATUS.IDLE);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (!movieId) return;
    const controller = new AbortController();

    async function getMovieReviews() {
      try {
        setStatus(STATUS.PENDING);
        let { results } = await fetchMovies({
          controller,
          fetchParams: `movie/${movieId}/reviews`,
        });
        if (results.length === 0) {
          setStatus(STATUS.RESOLVED);
          return toast.error('Nothing found!');
        }
        setReviews(results);
        setStatus(STATUS.RESOLVED);
      } catch (error) {
        if (error.message !== 'canceled') {
          setStatus(STATUS.ERROR);
          toast.error(error.message);
        }
      }
    }

    if (movieId) getMovieReviews();
    scroll.scrollMore(500);

    return () => {
      controller.abort();
    };
  }, [movieId]);

  return (
    <div>
      {status === STATUS.RESOLVED && !!reviews.length && (
        <ul>
          {reviews.map(({ author, content, id }) => (
            <li key={id}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
      {!reviews.length && <p>Sorry! Information is not available.</p>}
    </div>
  );
};

export default MovieReviews;
