import { Outlet } from 'react-router-dom';
import { Main, Header, NavLinkItem } from 'components/AppStyled';

export const SharedLayout = () => {
  return (
    <>
      <Header>
        <NavLinkItem to="/">Home</NavLinkItem>
        <NavLinkItem to="/movies">Movies</NavLinkItem>
      </Header>
      <Main>
        <Outlet />
      </Main>
    </>
  );
};
