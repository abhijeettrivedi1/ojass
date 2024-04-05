import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <a href="/" className="header-logo">Adelfox</a>
          <nav className="header-nav">
            <ul>
              <li><a href="/product">Product</a></li>
              <li><a href="/community">Community</a></li>
              <li><a href="/plans">Plans</a></li>
            </ul>
          </nav>
          <div className="header-actions">
            <a href="/login" className="header-login">Login</a>
            <a href="/signup" className="header-signup">Sign Up</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;