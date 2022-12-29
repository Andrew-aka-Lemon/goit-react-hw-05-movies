import { useEffect, useState } from 'react';

import { NavLink, useLocation } from 'react-router-dom';

import { getTrendingMovies } from 'utils/FilmsAPI';

const Home = () => {
  const [trends, setTrends] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getTrendingMovies().then(movies => setTrends(movies.results));
  }, []);

  return (
    <div>
      <ul>
        {trends.length > 0 &&
          trends.map(({ id, title }) => {
            return (
              <li key={id}>
                <NavLink to={`/movies/${id}`} state={location}>
                  {title}
                </NavLink>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Home;
