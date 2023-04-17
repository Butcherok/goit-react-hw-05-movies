import PropTypes from 'prop-types';
import { AdditionalInfo, AdditionalInfoTitle, AdditionalItem, AdditionalList, BaseMovieInfo, InfoList, MoviePoster } from './MovieInfo.styled';
import { MovieTrendLink } from 'components/MoviesList/MoviesList.styled';

const MovieInfo = ({ movie }) => {
  const {
    genres,
    overview,
    vote_average,
    poster_path,
    release_date,
    tagline,
    title,
  } = movie;

  const date = release_date
    ? release_date.split('-')[0]
    : 'No release information';

  const poster = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : 'https://placehold.co/500x750/png';

  const genreList = genres.map(genre => genre.name).join(', ');

  const genre = genreList.length
    ? genreList
    : 'Sorry! Information is not available.';
  const score = Math.round(vote_average * 10);
  return (
    <>
      <BaseMovieInfo>
        <MoviePoster src={poster} alt={tagline} />
        <InfoList>
          <h2>
            {title} ({date})
          </h2>
          <span>User Score: {score}%</span>
          <h3>Overview</h3>
          <span>{overview}</span>
          <h3>Genres</h3>
          <span>{genre}</span>
        </InfoList>
      </BaseMovieInfo>
      <AdditionalInfo>
        <AdditionalInfoTitle>Additional information</AdditionalInfoTitle>
        <AdditionalList>
          <AdditionalItem>
            <MovieTrendLink to={'cast'}>Cast</MovieTrendLink>
          </AdditionalItem>
          <AdditionalItem>
            <MovieTrendLink to={'reviews'}>Reviews</MovieTrendLink>
          </AdditionalItem>
        </AdditionalList>
      </AdditionalInfo>
    </>
  );
};

MovieInfo.propTypes = {
  movie: PropTypes.shape({
    release_date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
    vote_average: PropTypes.number.isRequired,
    genres: PropTypes.array.isRequired,
    overview: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieInfo;
