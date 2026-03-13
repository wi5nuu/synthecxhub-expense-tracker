import React from 'react';
import styled from 'styled-components';
import { Apple } from 'lucide-react';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--border);
`;

const AppleBtn = styled.button`
  background: white;
  color: black;
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  font-size: 0.875rem;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;

const Logo = styled.div`
  font-weight: 800;
  font-size: 1.25rem;
  letter-spacing: -0.02em;
`;

const Layout = ({ children }) => {
  return (
    <div style={{ padding: '1rem' }}>
      <Header>
        <Logo>Syntecxhub</Logo>
        <AppleBtn onClick={() => alert('Apple Sign-in simulation')}>
          <Apple size={18} fill="black" />
          Sign in with Apple
        </AppleBtn>
      </Header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
