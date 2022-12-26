import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavLinkItem = styled(NavLink)`
  margin-right: 30px;
  margin-left: 30px;
  text-decoration: none;
  color: #010101;
  padding: 10px;

  :hover:not(.active) {
    color: #c77100;
  }

  &.active {
    color: #fff;
    background-color: #9b0027;
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
  padding-top: 20px;
  padding-left: 20px;
`;

export { Main, Header, NavLinkItem };
