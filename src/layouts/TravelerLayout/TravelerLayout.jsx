import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './TravelerLayout.css';

const TravelerLayout = ({ children }) => {
  return (
    <div className="traveler-layout">
      <nav className="traveler-nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/traveler/explore" className="nav-link">Explore</Link>
        <Link to="/traveler/profile" className="nav-link">Profile</Link>
      </nav>
      <main className="traveler-content">
        {children || <Outlet />}
      </main>
    </div>
  );
};

export default TravelerLayout;