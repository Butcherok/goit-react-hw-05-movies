import React from 'react';
import { HeaderContainer, Link, Nav, NavItem, NavList } from './Header.styled';

const Header = () => {
  return (
    <HeaderContainer>
      <Nav>
        <NavList>
          <NavItem>
            <Link to={'/'}>Home</Link>
          </NavItem>
          <NavItem>
            <Link to={'/movies'}>Movies</Link>
          </NavItem>
        </NavList>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
