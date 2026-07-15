import React from 'react';
import adminImage from '../assets/admin image.jpeg';

function Navbar({ darkMode, onToggleTheme, onLogout, onToggleMobileSidebar }) {
  return (
    <header className="dashboard-navbar">
      <div className="d-flex align-items-center gap-3">
        <button 
          className="btn btn-sm text-secondary d-lg-none p-1 border-0" 
          onClick={onToggleMobileSidebar}
          aria-label="Toggle Sidebar"
        >
          <i className="fas fa-bars fa-lg" style={{ color: 'var(--text-main)' }}></i>
        </button>
        
        <div className="d-none d-sm-block">
          <span className="text-muted fw-semibold" style={{ fontSize: '0.8rem' }}>WELCOME BACK</span>
          <h5 className="mb-0 fw-bold" style={{ fontSize: '1.1rem' }}>Om Tank</h5>
        </div>
      </div>
 
      <div className="nav-search-bar d-none d-md-block">
        <i className="fas fa-search"></i>
        <input type="text" placeholder="Search cars, bookings, bills..." />
      </div>
 
      <div className="d-flex align-items-center gap-3">
        <button className="nav-icon-btn d-md-none" aria-label="Search">
          <i className="fas fa-search"></i>
        </button>

        <button 
          className="nav-icon-btn text-muted" 
          onClick={onToggleTheme} 
          aria-label="Toggle Theme"
          style={{ cursor: 'pointer' }}
          title={darkMode ? "Switch to Light Theme" : "Switch to Dark Theme"}
        >
          <i className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'}`}></i>
        </button>

        <button 
          className="nav-icon-btn text-danger" 
          onClick={onLogout} 
          aria-label="Sign Out"
          style={{ cursor: 'pointer' }}
          title="Sign Out"
        >
          <i className="fas fa-sign-out-alt"></i>
        </button>
 
        <div className="nav-profile">
          <img 
            className="nav-avatar" 
            src={adminImage} 
            alt="Admin Avatar" 
          />
          <div className="d-none d-lg-block text-start" style={{ lineHeight: '1.2' }}>
            <span className="fw-bold d-block" style={{ fontSize: '0.85rem', color: 'var(--text-main)' }}>Om Tank</span>
            <small className="text-muted" style={{ fontSize: '0.7rem' }}>Administrator</small>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
