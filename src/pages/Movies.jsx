import { useEffect } from 'react';
import { useState } from 'react';
import { NavLink, useLocation, useSearchParams } from 'react-router-dom';
import { getMovieByQuerySearch } from 'utils/FilmsAPI';

const Movies = () => {
  const [movieList, setMovieList] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieToSearch = searchParams.get('movie');
  const location = useLocation();

  useEffect(() => {
    if (movieToSearch === null) {
      return;
    }

    getMovieByQuerySearch(movieToSearch).then(e => setMovieList(e));
  }, [movieToSearch]);

  const submitHandler = e => {
    e.preventDefault();

    const { value } = e.currentTarget.elements.movie;

    setSearchParams({ movie: value });

    e.currentTarget.reset();
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder="input movie name" name="movie" />
        <button type="submit">Search</button>
      </form>
      {movieList !== null && (
        <ul>
          {movieList.map(({ id, original_title }) => (
            <li key={id}>
              <NavLink to={`/movies/${id}`} state={location}>
                {original_title}{' '}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Movies;
