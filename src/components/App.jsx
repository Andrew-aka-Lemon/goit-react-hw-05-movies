import { Routes, Route } from 'react-router-dom';
// import SharedLayout from '../pages/SharedLayout';

import { Home } from 'pages/Home';
import { Movies } from 'pages/Movies';
import { MovieDetails } from 'pages/MovieDetails';
import { Cast } from 'components/Cast';
import { Main, Header, NavLinkItem } from './AppStyled';

export const App = () => {
  return (
    <>
      <Header>
        <NavLinkItem to="/">Home</NavLinkItem>
        <NavLinkItem to="/movies">Movies</NavLinkItem>
      </Header>
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />}></Route>
            <Route path="reviews"></Route>
          </Route>
        </Routes>
      </Main>
    </>
  );
};
