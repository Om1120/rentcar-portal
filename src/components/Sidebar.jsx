import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Sidebar({ collapsed, toggleCollapsed, mobileShow, toggleMobileShow }) {
  const location = useLocation();

  const menuItems = [
    { name: 'Dashboard', path: '/admin', icon: 'fa-th-large' },
    { name: 'Cars', path: '/admin/cars', icon: 'fa-car' },
    { name: 'Bookings', path: '/admin/bookings', icon: 'fa-calendar-check' },
    { name: 'Customers', path: '/admin/customers', icon: 'fa-users' },
    { name: 'Payments', path: '/admin/payments', icon: 'fa-credit-card' },
    { name: 'Reports', path: '/admin/reports', icon: 'fa-chart-bar' },
    { name: 'Reviews', path: '/admin/reviews', icon: 'fa-star' },
    { name: 'Settings', path: '/admin/settings', icon: 'fa-cog' },
  ];

  const isActive = (path) => {
    if (path === '/admin') {
      return location.pathname === '/admin' || location.pathname === '/admin/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {mobileShow && (
        <div 
          className="d-lg-none" 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1040,
            backdropFilter: 'blur(2px)'
          }}
          onClick={toggleMobileShow}
        />
      )}

      <aside className={`sidebar-container ${collapsed ? 'collapsed' : ''} ${mobileShow ? 'mobile-show' : ''}`}>
        <div className="sidebar-header d-flex justify-content-between align-items-center">
          <Link to="/" className="sidebar-brand" onClick={() => mobileShow && toggleMobileShow()}>
            <i className="fas fa-car-side"></i>
            {!collapsed && <span className="fw-extrabold text-white">DriveX Admin</span>}
          </Link>
          
          <button 
            className="btn btn-sm text-white d-lg-none border-0" 
            onClick={toggleMobileShow}
            aria-label="Close Sidebar"
          >
            <i className="fas fa-times fa-lg"></i>
          </button>
        </div>

        <nav className="sidebar-menu">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`sidebar-item ${isActive(item.path) ? 'active' : ''}`}
              onClick={() => mobileShow && toggleMobileShow()}
              title={collapsed ? item.name : ''}
            >
              <i className={`fas ${item.icon}`}></i>
              {!collapsed && <span>{item.name}</span>}
            </Link>
          ))}
        </nav>

        <div className="p-3 border-top border-secondary border-opacity-10 d-none d-lg-block">
          <button
            onClick={toggleCollapsed}
            className="w-100 btn btn-sm btn-outline-light border-0 d-flex align-items-center justify-content-center gap-2"
            style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.05)', 
              color: '#94a3b8',
              borderRadius: '8px'
            }}
            title={collapsed ? "Expand Menu" : "Collapse Menu"}
          >
            <i className={`fas ${collapsed ? 'fa-chevron-right' : 'fa-chevron-left'}`}></i>
            {!collapsed && <span style={{ fontSize: '0.8rem', fontWeight: 600 }}>Collapse</span>}
          </button>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
