// src/components/DashboardCard.jsx
import React from 'react';

function DashboardCard({ title, value, icon, gradient, change }) {
  return (
    <div className="col-12 col-md-6 col-xl-4">
      <div 
        className="glass-card metric-card h-100" 
        style={{ background: gradient }}
      >
        <div className="d-flex justify-content-between align-items-start">
          <div>
            <div className="metric-card-title">{title}</div>
            <div className="metric-card-value mt-2">{value}</div>
          </div>
          <div className="metric-card-icon">
            <i className={`fas ${icon}`}></i>
          </div>
        </div>
        {change && (
          <div className="metric-card-change">
            <i className="fas fa-arrow-trend-up"></i>
            <span>{change}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default DashboardCard;
