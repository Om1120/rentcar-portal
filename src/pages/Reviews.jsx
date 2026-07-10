import React from 'react';

function Reviews({ reviewsList, onDeleteReview }) {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <i 
          key={i} 
          className={`fas fa-star ${i <= rating ? 'text-warning' : 'text-secondary opacity-30'}`}
          style={{ fontSize: '0.85rem', marginRight: '2px' }}
        ></i>
      );
    }
    return stars;
  };

  return (
    <div className="container-fluid px-0">
      <div className="mb-4">
        <h2 className="fw-bold mb-1">Customer Reviews</h2>
        <p className="text-muted mb-0">Read and moderate feedback, ratings, and testimonials submitted by clients.</p>
      </div>

      <div className="glass-card mb-4">
        <div className="row align-items-center g-4">
          <div className="col-12 col-md-4 text-center border-end border-secondary border-opacity-10">
            <h1 className="fw-extrabold mb-1" style={{ fontSize: '3.5rem', color: '#f59e0b' }}>4.8</h1>
            <div className="mb-2">{renderStars(5)}</div>
            <p className="text-muted mb-0">Out of 124 total reviews</p>
          </div>
          
          <div className="col-12 col-md-8">
            {[
              { stars: 5, pct: 85 },
              { stars: 4, pct: 10 },
              { stars: 3, pct: 3 },
              { stars: 2, pct: 1 },
              { stars: 1, pct: 1 }
            ].map((r) => (
              <div key={r.stars} className="d-flex align-items-center gap-3 mb-2" style={{ fontSize: '0.85rem' }}>
                <span style={{ width: '50px' }} className="text-start">{r.stars} Stars</span>
                <div className="progress flex-grow-1" style={{ height: '8px', backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
                  <div className="progress-bar bg-warning" role="progressbar" style={{ width: `${r.pct}%` }} aria-valuenow={r.pct} aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <span style={{ width: '40px' }} className="text-end text-muted">{r.pct}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="row g-4">
        {reviewsList.length > 0 ? (
          reviewsList.map((rev) => (
            <div key={rev.id} className="col-12 col-md-6">
              <div className="glass-card h-100 d-flex flex-column justify-content-between">
                <div>
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <div>
                      <h6 className="fw-bold mb-1">{rev.customerName}</h6>
                      <small className="text-muted">{rev.date}</small>
                    </div>
                    <div>
                      {renderStars(rev.rating)}
                    </div>
                  </div>
                  
                  <p className="mb-3 text-start text-muted" style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>
                    "{rev.comment}"
                  </p>
                </div>

                <div className="d-flex justify-content-between align-items-center pt-3 border-top border-secondary border-opacity-10 mt-auto">
                  <span style={{ fontSize: '0.78rem', color: '#06b6d4', backgroundColor: 'rgba(6, 182, 212, 0.1)', border: '1px solid rgba(6, 182, 212, 0.15)' }} className="badge px-2 py-1 rounded-pill">
                    <i className="fas fa-car me-1"></i>{rev.carName}
                  </span>
                  
                  <div className="d-flex gap-2">
                    <button 
                      className="btn btn-sm btn-outline-light border border-danger border-opacity-20 text-danger px-3 d-flex align-items-center gap-1"
                      style={{ borderRadius: '8px' }}
                      onClick={() => onDeleteReview(rev.id, rev.customerName)}
                    >
                      <i className="fas fa-trash"></i>
                      <span>Delete Review</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12">
            <div className="glass-card text-center py-5">
              <i className="fas fa-comment-slash fa-3x text-muted mb-3"></i>
              <h5>No customer reviews found.</h5>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Reviews;
