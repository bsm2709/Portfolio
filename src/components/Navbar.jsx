import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background: rgba(255, 255, 255, 0.95);
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  color: #333;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.98);
    padding: 1rem;
    gap: 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
`;

const NavLink = styled(Link)`
  color: #333;
  text-decoration: none;
  cursor: pointer;
  font-weight: 500;
  transition: color 0.3s ease;
  padding: 0.5rem 0;

  &:hover {
    color: #007bff;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 0.5rem;
    border-radius: 4px;

    &:hover {
      background: #f0f0f0;
    }
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #333;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #007bff;
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <Nav>
      <NavContainer>
        <Logo>Basanagouda Meti</Logo>
        <MenuButton onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </MenuButton>
        <NavLinks isOpen={isOpen}>
          <NavLink to="about" smooth={true} duration={500} onClick={closeMenu}>About</NavLink>
          <NavLink to="education" smooth={true} duration={500} onClick={closeMenu}>Education</NavLink>
          <NavLink to="projects" smooth={true} duration={500} onClick={closeMenu}>Projects</NavLink>
          <NavLink to="skills" smooth={true} duration={500} onClick={closeMenu}>Skills</NavLink>
          <NavLink to="contact" smooth={true} duration={500} onClick={closeMenu}>Contact</NavLink>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;