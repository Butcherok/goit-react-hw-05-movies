import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 24px;
  padding-left: 24px;
  width: 100%;
  color: #fff;
  border: 2px solid lightblue;
  background-color: #fff;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;
export const Nav = styled.nav`
  width: 100%;
  margin: 0 auto;
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: start;
  width: 100%;
  margin: 0 auto;
  gap: 24px;
`;

export const NavItem = styled.li`
  padding: 24px;
  font-size: 32px;
  font-weight: 700;
  color: #212121;
`;

export const Link = styled(NavLink)`
  color: #212121;
  list-style: none;
  text-decoration: none;
  cursor: pointer;
  &:hover,
  &:focus {
    color: tomato;
    transition: all 0.3s ease-in-out;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
  &.active {
    color: orange;
  }
`;
