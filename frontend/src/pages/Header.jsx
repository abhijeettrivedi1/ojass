import React from 'react';
import { Link } from 'react-router-dom';

const linkStyle = {
  color: '#4B5563', // Equivalent to text-gray-800
  transition: 'color 0.3s ease-in-out',
};

const hoverStyle = {
  color: '#6B7280', // Equivalent to hover:text-gray-600
};

const Header = () => {
  return (
    <nav style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '8px', marginBottom: '8px' }}>
      <Link to={"/"} style={linkStyle}>
        Home
      </Link>
      <Link to={"/about"} style={{ ...linkStyle, ...hoverStyle }}>
        About
      </Link>
      <Link to={"/login"} style={{ ...linkStyle, ...hoverStyle }}>
        Login
      </Link>
      <Link to={"/register"} style={{ ...linkStyle, ...hoverStyle }}>
        Register
      </Link>
    </nav>
  );
};

export default Header;
