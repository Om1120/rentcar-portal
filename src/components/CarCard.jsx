import React from 'react';

function CarCard({ car, onEdit, onDelete, isAdminMode }) {
  const getStatusBadgeClass = (status) => {
    switch (status?.toLowerCase()) {
      case 'available':
        return 'status-badge available';
      case 'booked':
        return 'status-badge booked';
      case 'maintenance':
        return 'status-badge maintenance';
      default:
        return 'status-badge';
    }
  };

  const displayPrice = car.price || (car.pricePerDay ? `₹${car.pricePerDay}/day` : '₹0/day');

  return (
    <div className="premium-car-card">
      <div className="card-image-wrapper">
        <img src={car.image} alt={car.name} className="card-car-img" />
        <div className="card-gradient-overlay"></div>
      </div>
      <div className="card-details-section">
        <div className="d-flex justify-content-between align-items-center mb-1">
          <span className="card-type-label">{car.type}</span>
          <span className={getStatusBadgeClass(car.status)}>{car.status}</span>
        </div>
        <h4 className="card-car-name">{car.name}</h4>
        
        <div className="card-specs-row">
          <div className="spec-item">
            <i className="fas fa-calendar-alt"></i>
            <span>{car.year || 2023}</span>
          </div>
          <div className="spec-item">
            <i className="fas fa-gas-pump"></i>
            <span>{car.fuel || 'Petrol'}</span>
          </div>
          <div className="spec-item">
            <i className="fas fa-cog"></i>
            <span>{car.transmission || 'Automatic'}</span>
          </div>
        </div>

        <div className="card-footer-row">
          <div className="price-container">
            <span className="price-label">Rate</span>
            <span className="price-value">{displayPrice}</span>
          </div>

          <div className="card-actions">
            {isAdminMode ? (
              <div className="d-flex gap-2">
                <button 
                  className="card-action-btn edit-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    if (onEdit) onEdit(car);
                  }}
                  title="Edit Details"
                >
                  <i className="fas fa-edit"></i>
                </button>
                <button 
                  className="card-action-btn delete-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    if (onDelete) onDelete(car.id, car.name);
                  }}
                  title="Delete Vehicle"
                >
                  <i className="fas fa-trash"></i>
                </button>
              </div>
            ) : (
              <button className="rent-now-btn">
                <span>Rent Now</span>
                <i className="fas fa-arrow-right ms-2"></i>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarCard;