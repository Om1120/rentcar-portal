import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FaCarSide } from 'react-icons/fa';
import CustomButton from './CustomButton';

const Nav = styled.nav`
  background: rgba(11, 15, 25, 0.85);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  position: sticky;
  top: 0;
  z-index: 1000;
  height: 80px;
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Brand = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.6rem;
  font-weight: 800;
  text-decoration: none;
  background: linear-gradient(135deg, var(--website-primary, #7C3AED) 0%, var(--website-secondary, #06B6D4) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;

const MenuLink = styled(NavLink)`
  color: #b3c5df;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  padding: 4px 0;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--website-secondary, #06B6D4);
    transition: width 0.3s ease;
  }

  &:hover {
    color: #ffffff;
    &::after {
      width: 100%;
    }
  }

  &.active {
    color: #ffffff;
    &::after {
      width: 100%;
      background: var(--website-primary, #7C3AED);
    }
  }
`;

const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

function CustomerNavbar({ websiteName }) {
  return (
    <Nav>
      <Container>
        <Brand to="/">
          <FaCarSide style={{ color: 'var(--website-primary, #7C3AED)' }} />
          <span>{websiteName || 'DriveX'}</span>
        </Brand>

        <NavLinks>
          <MenuLink to="/" end>Home</MenuLink>
          <MenuLink to="/cars">Cars</MenuLink>
          <MenuLink to="/about">About</MenuLink>
          <MenuLink to="/reviews">Reviews</MenuLink>
          <MenuLink to="/contact">Contact</MenuLink>
        </NavLinks>

        <NavActions>
          <Link to="/cars" style={{ textDecoration: 'none' }}>
            <CustomButton size="sm">Explore Fleet</CustomButton>
          </Link>
          <Link to="/admin" style={{ textDecoration: 'none' }}>
            <CustomButton outline size="sm">Admin Portal</CustomButton>
          </Link>
        </NavActions>
      </Container>
    </Nav>
  );
}

export default CustomerNavbar;
