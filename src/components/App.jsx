import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import MoviePage from './Pages/MoviePage';
import Layout from './Layout/Layout';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviePage />} />
        </Route>
      </Routes>
    </>
  );
};
