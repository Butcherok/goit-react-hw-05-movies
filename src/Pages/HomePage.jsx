import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const HomePage = () => {
      const location = useLocation();

  return (
    <main>
      <h1>Trending today</h1>
      <ul>
        <li>
          <Link to={'movies/:id'} state={{ from: location }}>
            Batman
          </Link>
        </li>
      </ul>
    </main>
  );
};

export default HomePage;
