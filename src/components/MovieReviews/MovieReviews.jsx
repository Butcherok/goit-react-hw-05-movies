import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import { fetchMovies } from 'utils/api';
import { STATUS } from 'utils/constants';
import { ReviewNoInfo, ReviewText, ReviewTitle, ReviewsContainer, ReviewsItem, ReviewsList } from './MovieReviews.styled';

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
    <ReviewsContainer>
      {status === STATUS.RESOLVED && !!reviews.length && (
        <ReviewsList>
          {reviews.map(({ author, content, id }) => (
            <ReviewsItem key={id}>
              <ReviewTitle>Author: {author}</ReviewTitle>
              <ReviewText>{content}</ReviewText>
            </ReviewsItem>
          ))}
        </ReviewsList>
      )}
      {!reviews.length && <ReviewNoInfo>Sorry! Information is not available.</ReviewNoInfo>}
    </ReviewsContainer>
  );
};

export default MovieReviews;
