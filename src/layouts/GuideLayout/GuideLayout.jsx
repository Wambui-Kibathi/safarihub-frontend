import React from 'react';
import { Outlet } from 'react-router-dom';
import GuideNavbar from '../../components/guide/GuideNavbar/GuideNavbar';
import './GuideLayout.css';

const GuideLayout = ({ children }) => {
  return (
    <div className="guide-layout">
      <GuideNavbar />
      <main className="guide-content">
        {children || <Outlet />}
      </main>
    </div>
  );
};

export default GuideLayout;