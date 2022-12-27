import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

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

export { NavLinkItem, AdditionalMovieInfo, MovieInfo, MovieTextInfo };
