// src/components/common/Header.js
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: var(--white);
  border-bottom: 1px solid var(--medium-gray);
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 1.5rem;
  color: var(--secondary-color);

  svg {
    margin-right: 0.5rem;
    color: var(--primary-color);
  }
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
`;

const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  margin-right: 2rem;
`;

const NavItem = styled.li`
  margin: 0 1rem;
`;

const StyledNavLink = styled(NavLink)`
  color: var(--text-color);
  padding: 0.5rem;
  border-bottom: 2px solid transparent;
  transition: border-color 0.3s;

  &.active {
    border-color: var(--primary-color);
    color: var(--primary-color);
  }

  &:hover {
    border-color: var(--primary-color);
  }
`;

const AuthButtons = styled.div`
  display: flex;
  align-items: center;
`;

const SignInButton = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  margin-right: 0.5rem;
  border: 1px solid var(--primary-color);
  border-radius: 4px;
  color: var(--primary-color);
  transition: background-color 0.3s;

  svg {
    margin-right: 0.5rem;
  }

  &:hover {
    background-color: rgba(59, 191, 173, 0.1);
  }
`;

const HelpButton = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: var(--primary-color);
  border-radius: 4px;
  color: var(--white);
  transition: background-color 0.3s;

  svg {
    margin-right: 0.5rem;
  }

  &:hover {
    background-color: rgba(59, 191, 173, 0.8);
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <Logo>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" />
          <path
            d="M2 17L12 22L22 17"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 12L12 17L22 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Campus Connect
      </Logo>

      <Navigation>
        <NavMenu>
          <NavItem>
            <StyledNavLink to="/" end>
              Home
            </StyledNavLink>
          </NavItem>
          <NavItem>
            <StyledNavLink to="/bookings">Bookings</StyledNavLink>
          </NavItem>
          <NavItem>
            <StyledNavLink to="/timetable">Timetable</StyledNavLink>
          </NavItem>
        </NavMenu>

        <AuthButtons>
          <SignInButton to="/login">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 17L15 12L10 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15 12H3"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Sign In
          </SignInButton>

          <HelpButton to="/help">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15849 13.7588 7.52152 14.2151 8.06353C14.6713 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 17H12.01"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Help
          </HelpButton>
        </AuthButtons>
      </Navigation>
    </StyledHeader>
  );
};

export default Header;
