import { Routes, Route } from 'react-router-dom';
// import SharedLayout from '../pages/SharedLayout';

import { Home } from 'pages/Home';
import { Movies } from 'pages/Movies';
import { MovieDetails } from 'pages/MovieDetails';
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
          <Route path="/" element={<Home />}></Route>
          <Route path="/:movieId" element={<MovieDetails />}></Route>

          {/* <Route index element={<Home />}></Route> */}
          <Route path="/Movies" element={<Movies />}></Route>
        </Routes>
      </Main>
    </>
  );
};
