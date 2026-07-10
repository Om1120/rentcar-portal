import React from 'react';

function ChartCard({ title, children, size = "col-lg-6" }) {
  return (
    <div className={`col-12 ${size}`}>
      <div className="glass-card h-100">
        <div className="d-flex justify-content-between align-items-center mb-4 border-bottom border-secondary border-opacity-10 pb-2">
          <h5 className="mb-0 fw-bold" style={{ fontSize: '1.05rem' }}>{title}</h5>
          <div className="dropdown">
            <button 
              className="btn btn-sm p-1 border-0" 
              type="button" 
              aria-label="Chart Actions"
              style={{ color: 'var(--text-muted)' }}
            >
              <i className="fas fa-ellipsis-v"></i>
            </button>
          </div>
        </div>
        <div style={{ width: '100%', height: '300px' }}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default ChartCard;
