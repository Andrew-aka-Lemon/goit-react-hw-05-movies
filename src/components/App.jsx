import styled from 'styled-components';
import { Routes, Route, NavLink, Outlet } from 'react-router-dom';
// import SharedLayout from '../pages/SharedLayout';

import { Home } from 'pages/Home';
import { Movies } from 'pages/Movies';

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
          <Route index element={<Home />}></Route>
          <Route path="/Movies" element={<Movies />}></Route>
        </Routes>
      </Main>
    </>
  );
};

const NavLinkItem = styled(NavLink)`
  margin-right: 30px;
  margin-left: 30px;
  text-decoration: none;
  color: #010101;

  :hover {
    color: blue;
  }

  &.active {
    color: orange;
  }
`;

const Header = styled.div`
  height: 100px;
  /* position: absolute; */
  display: flex;
  justify-content: left;
  align-items: center;
  font-size: 40px;
  color: #010101;
`;

const Main = styled.main`
  /* margin-top: 100px; */
`;
