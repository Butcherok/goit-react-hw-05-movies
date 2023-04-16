import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const MoviesList = ({movies}) => {
  const location = useLocation();


  return (
    <ul>
      {movies.map(({ id, title }) => {
        return (
          <li key={id}>
            <Link to={`${id}`} state={{ from: location }}>
              {title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MoviesList;
