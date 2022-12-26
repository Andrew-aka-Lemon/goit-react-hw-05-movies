import { useEffect } from 'react';
import { useState } from 'react';

import { NavLink } from 'react-router-dom';

import { getTrendingMovies } from 'utils/FilmsAPI';

export const Home = () => {
  const [trends, setTrends] = useState([]);

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
                <NavLink>{title}</NavLink>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
