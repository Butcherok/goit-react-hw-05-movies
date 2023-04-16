import { Suspense, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import BackLink from 'components/BackLink/BackLink';
import MovieInfo from 'components/MovieInfo/MovieInfo';

const MovieDetails = () => {
    const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

    // function getSimpleData(data) {
    //   return data.map(
    //     ({
    //       id,
    //       poster_path,
    //       title,
    //       original_title,
    //       release_date,
    //       popularity,
    //       genre_ids,
    //       overview,
    //     }) => {
    //       const date = release_date
    //         ? release_date.split('-')[0]
    //         : 'No release information';

    //       const poster = poster_path
    //         ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    //         : 'https://placehold.co/500x750/png';
    //       const genreList = genre_ids.map(genre => genre.name).join(' ');
    //       const genre = genreList.length
    //         ? genreList
    //         : 'Sorry! Information is not available.';
    //       return {
    //         date,
    //         title,
    //         original_title,
    //         id,
    //         poster,
    //         popularity: popularity + '',
    //         genre,
    //         overview,
    //       };
    //     }
    //   );
    // }

  return (
    <main>
      <BackLink to={backLinkHref.current}>Go back</BackLink>
      <MovieInfo />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>{' '}
    </main>
  );
};

export default MovieDetails;
