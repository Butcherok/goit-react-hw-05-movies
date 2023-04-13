import MoviesList from 'components/MoviesList/MoviesList';
import SearchForm from 'components/SearchForm/SearchForm';
import { useSearchParams } from 'react-router-dom';
// import { useSearchParams } from 'react-router-dom';

const MoviePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryMovie = searchParams.get('query') ?? '';

    const updateQueryString = query => {
      const nextParams = query !== '' ? { query } : {};
      setSearchParams(nextParams);
    };


  return (
    <main>
      <SearchForm value={queryMovie} onChange={updateQueryString} />
      <MoviesList />
    </main>
  );
};

export default MoviePage;
