import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import Layout from './Layout/Layout';
import MovieCast from './MovieCast/MovieCast';
import MovieReviews from './MovieReviews/MovieReviews';

const HomePage = lazy(() => import('../Pages/HomePage'));
const MoviesPage = lazy(() => import('../Pages/MoviesPage'));
const NotFound = lazy(() => import('../Pages/NotFound'));
const MovieDetails = lazy(() => import('../Pages/MovieDetails'));
// import HomePage from '../Pages/HomePage';
// import MoviesPage from '../Pages/MoviesPage';
// import NotFound from '../Pages/NotFound';
// import MovieDetails from 'Pages/MovieDetails';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" end element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
