import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams, NavLink } from 'react-router-dom';
import { getMovieByID } from 'utils/FilmsAPI';
import { getGenres } from 'utils/genresMashine';

export const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w400/';

  useEffect(() => {
    getMovieByID(movieId).then(movie => setMovie(movie));
  }, [movieId]);

  if (movie === null) {
    return;
  }
  const { title, vote_average, poster_path, overview, genres } = movie;
  const genresString = getGenres(genres);
  return (
    <>
      <NavLink>{`<---`}Back to movielist</NavLink>
      <MovieInfo>
        <img src={`${BASE_IMG_URL}${poster_path}`} alt={title} />
        <MovieTextInfo>
          <h1>Title: {title}</h1>
          <h2>User csore:</h2>
          <p>{Number(vote_average).toFixed(2)}</p>
          <h2>Owerview:</h2>
          <p> {overview}</p>
          <h2>Genres</h2>
          <p>{genresString}</p>
        </MovieTextInfo>
      </MovieInfo>
      <div>
        <ul>
          <li>
            <NavLink>Cast</NavLink>
          </li>
          <li>
            <NavLink>Reviews</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

const MovieInfo = styled.div`
  display: flex;
  margin-top: 10px;
`;

const MovieTextInfo = styled.div`
  padding: 20px;
  padding-top: 0;
`;
