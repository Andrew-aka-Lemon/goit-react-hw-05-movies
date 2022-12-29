import { Outlet } from 'react-router-dom';
import { Main, Header, NavLinkItem } from 'components/AppStyled';
import { Suspense } from 'react';

export const SharedLayout = () => {
  return (
    <>
      <Header>
        <NavLinkItem to="/">Home</NavLinkItem>
        <NavLinkItem to="/movies">Movies</NavLinkItem>
      </Header>
      <Main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Main>
    </>
  );
};
