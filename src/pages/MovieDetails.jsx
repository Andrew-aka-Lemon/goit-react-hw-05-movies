import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams, NavLink, Outlet } from 'react-router-dom';
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
      <AdditionalMovieInfo>
        <h3>
          <NavLinkItem to="cast">Cast</NavLinkItem>
        </h3>
        <h3>
          <NavLinkItem to="reviews">Reviews</NavLinkItem>
        </h3>
      </AdditionalMovieInfo>
      <Outlet />
    </>
  );
};

const MovieInfo = styled.div`
  display: flex;
  margin-top: 10px;

  box-shadow: 0px 10px 5px 0px rgba(140, 140, 140, 1);
`;

const MovieTextInfo = styled.div`
  padding: 20px;
  padding-top: 0;
`;

const AdditionalMovieInfo = styled.div`
  padding-top: 5px;
  padding-bottom: 5px;
  box-shadow: 0px 10px 5px 0px rgba(140, 140, 140, 1);
  margin-bottom: 20px;
`;

const NavLinkItem = styled(NavLink)`
  text-decoration: none;
  color: #010101;
  padding: 10px;

  :hover:not(.active) {
    color: #c77100;
  }

  &.active {
    color: #fff;
    background-color: #4d2096;
  }
`;
