import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FaHome, FaCar, FaBookOpen, FaStar, FaEnvelope } from 'react-icons/fa';
import adminImage from '../../assets/admin image.jpeg';

const NavContainer = styled.div`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  width: 90%;
  max-width: 530px;
  display: flex;
  justify-content: center;
`;

const NavPill = styled.nav`
  background: rgba(15, 23, 42, 0.45);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 40px;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.1);
`;

const MenuLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #b3c5df; /* muted light blue-grey */
  font-weight: 700;
  padding: 8px 14px;
  border-radius: 30px;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  gap: 8px;
  
  svg {
    font-size: 1.25rem;
    transition: all 0.3s ease;
  }

  span {
    font-size: 0.78rem;
    font-weight: 800;
    display: none;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    transition: all 0.3s ease;
  }

  &:hover {
    color: var(--website-secondary, #06B6D4);
    
    .avatar-wrapper {
      border-color: var(--website-secondary, #06B6D4);
    }
  }

  &.active {
    background: linear-gradient(135deg, var(--website-primary, #7C3AED) 0%, var(--website-secondary, #06B6D4) 100%);
    color: #ffffff;
    box-shadow: 0 4px 15px rgba(124, 58, 237, 0.35);
    padding: 8px 18px;
    
    svg {
      color: #ffffff;
    }
    
    span {
      display: block;
    }

    .avatar-wrapper {
      border-color: #ffffff;
    }
  }
`;

const AvatarWrapper = styled.div`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid var(--website-secondary, #06B6D4);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

function CustomerNavbar() {
  return (
    <NavContainer>
      <NavPill>
        <MenuLink to="/" end>
          <FaHome />
          <span>Home</span>
        </MenuLink>
        <MenuLink to="/cars">
          <FaCar />
          <span>Cars</span>
        </MenuLink>
        <MenuLink to="/about">
          <FaBookOpen />
          <span>About</span>
        </MenuLink>
        <MenuLink to="/reviews">
          <FaStar />
          <span>Reviews</span>
        </MenuLink>
        <MenuLink to="/contact">
          <FaEnvelope />
          <span>Contact</span>
        </MenuLink>
        <MenuLink to="/admin">
          <AvatarWrapper className="avatar-wrapper">
            <img src={adminImage} alt="Admin" />
          </AvatarWrapper>
          <span>Admin</span>
        </MenuLink>
      </NavPill>
    </NavContainer>
  );
}

export default CustomerNavbar;
