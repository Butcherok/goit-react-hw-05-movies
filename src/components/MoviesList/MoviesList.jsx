import React from 'react';
import PropTypes, { shape } from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { MoviesTrendItem, MoviesTrendList } from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <MoviesTrendList>
      {movies.map(({ id, title }) => {
        return (
          <MoviesTrendItem key={id}>
            <Link to={`${id}`} state={{ from: location }}>
              {title}
            </Link>
          </MoviesTrendItem>
        );
      })}
    </MoviesTrendList>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default MoviesList;
