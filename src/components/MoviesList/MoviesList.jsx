import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const MoviesList = () => {
    const location = useLocation();
  return (
    <ul>
      <li>
        <Link to={':id'} state={{ from: location }}>Movie-1</Link>
      </li>
    </ul>
  );
};

export default MoviesList;
