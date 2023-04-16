import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import MoviesList from 'components/MoviesList/MoviesList';
import SearchForm from 'components/SearchForm/SearchForm';
import { STATUS } from 'utils/constans';
import { fetchMovies } from 'utils/api';
import { toast } from 'react-hot-toast';

const MoviePage = () => {
  // const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(STATUS.IDLE);
  const [searchParams, setSearchParams] = useSearchParams();
  // const queryMovie = searchParams.get('query') ?? '';
  const { query } = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );

  useEffect(() => {
    if (!query) return;
    const controller = new AbortController();

    async function getMoviesTrend() {
      try {
        setStatus(STATUS.PENDING);
        const {results} = await fetchMovies({
          controller,
          fetchParams: 'search/movie',
          query,
        });
        if (results.length === 0) {
          setStatus(STATUS.RESOLVED);
          return toast.error('Nothing found!');
        }
        setMovies(getSimpleData(results));
        setStatus(STATUS.RESOLVED);
        // setSearchParams({});
      } catch (error) {
        if (error.message !== 'canceled') {
          setStatus(STATUS.ERROR);
          toast.error(error.message);
        }
      }
    }

    if (query) getMoviesTrend();

    return () => {
      controller.abort();
    };
  }, [query]);

  // const updateQueryString = query => {
  //   const nextParams = query !== '' ? { query } : {};
  //   setSearchParams(nextParams);
  // };

  // const onHandleSubmit = e => {
  //   e.preventDefault();
  //   if (!queryMovie.trim()) return;
  //   setSearchParams({ query: queryMovie.trim().toLowerCase() });
  //   // setQuery(queryText);
  // };

  function getSimpleData(data) {
    return data.map(({ id, title }) => {
      return { id, title };
    });
  }

  return (
    <main>
      <SearchForm setSearchParams={setSearchParams} />
      {status === STATUS.RESOLVED && !!movies.length && (
        <MoviesList movies={movies} />
      )}
    </main>
  );
};

export default MoviePage;
