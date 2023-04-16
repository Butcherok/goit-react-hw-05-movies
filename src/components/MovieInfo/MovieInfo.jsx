import React from 'react';
import { Link } from 'react-router-dom';

const MovieInfo = () => {
  
  return (
    <>
      <div>
        <img src="" alt="" />
        <h2>Title (year)</h2>
        <span>User Score: 74%</span>
        <h3>Overview</h3>
        <span>text</span>
        <h3>Genres</h3>
        <span>text</span>
      </div>
      <div>
        <span></span>
        <ul>
          <li>
            <Link to={'cast'}>Cast</Link>
          </li>
          <li>
            <Link to={'reviews'}>Reviews</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MovieInfo;
