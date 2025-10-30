import React from 'react';
import { Outlet } from 'react-router-dom';
import './MainLayout.css';

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <main className="main-content">
        {children || <Outlet />}
      </main>
    </div>
  );
};

export default MainLayout;