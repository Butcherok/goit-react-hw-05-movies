import BackLink from 'components/BackLink/BackLink';
import React, { Suspense } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const MovieDetails = () => {
    const location = useLocation();
    const backLinkHref = location.state?.from ?? '/movies';

  return (
    <main>
      <BackLink to={backLinkHref}>Go back</BackLink>
      <div>MovieDetails</div>
      <ul>
        <li>
          <Link to={'cast'}>Cast</Link>
        </li>
        <li>
          <Link to={'reviews'}>Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>{' '}
    </main>
  );
};

export default MovieDetails;
