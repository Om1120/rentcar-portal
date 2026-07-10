// src/components/ActivityCard.jsx
import React from 'react';

function ActivityCard({ text, time, icon, badgeClass }) {
  return (
    <div className="activity-item">
      <div className={`activity-icon-wrapper ${badgeClass || 'bg-light text-secondary'}`}>
        <i className={`fas ${icon || 'fa-info-circle'}`}></i>
      </div>
      <div className="activity-details">
        <p className="activity-text text-start mb-0">{text}</p>
        <span className="activity-time text-start d-block">{time}</span>
      </div>
    </div>
  );
}

export default ActivityCard;
