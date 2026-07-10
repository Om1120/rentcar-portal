import React from 'react';

import car1 from '../assets/car1.png';
import car2 from '../assets/car2.png';
import car3 from '../assets/car3.png';
import car4 from '../assets/car4.png';
import car8 from '../assets/car8.png';
import car9 from '../assets/car9.png';
import car10 from '../assets/car10.png';
import car11 from '../assets/car11.png';
import car12 from '../assets/car12.png';
import car13 from '../assets/car13.png';
import car14 from '../assets/car14.png';
import car16 from '../assets/car16.png';

function BookingTable({ bookings, onUpdateBookingStatus, onDeleteBooking }) {
  const getStatusClass = (status) => {
    switch (status?.toLowerCase()) {
      case 'confirmed':
        return 'status-badge confirmed';
      case 'pending':
        return 'status-badge pending';
      case 'completed':
        return 'status-badge completed';
      case 'cancelled':
        return 'status-badge cancelled';
      default:
        return 'status-badge';
    }
  };

  const getCarImage = (name) => {
    const lowercaseName = name?.toLowerCase() || '';
    if (lowercaseName.includes('tesla')) return car11;
    if (lowercaseName.includes('bmw')) return car2;
    if (lowercaseName.includes('range') || lowercaseName.includes('rover')) return car9;
    if (lowercaseName.includes('porsche')) return car10;
    if (lowercaseName.includes('mercedes') || lowercaseName.includes('g-wagon')) return car3;
    if (lowercaseName.includes('mustang') || lowercaseName.includes('shelby')) return car8;
    if (lowercaseName.includes('fortuner')) return car4;
    if (lowercaseName.includes('audi')) return car12;
    if (lowercaseName.includes('wrangler') || lowercaseName.includes('jeep')) return car13;
    if (lowercaseName.includes('civic')) return car14;
    if (lowercaseName.includes('lexus')) return car16;
    if (lowercaseName.includes('swift')) return car1;
    return car11; // Fallback
  };

  return (
    <div className="custom-table-container">
      <table className="custom-table">
        <thead>
          <tr>
            <th>Booking ID</th>
            <th>Customer</th>
            <th>Car Model</th>
            <th>Pickup</th>
            <th>Return</th>
            <th>Status</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings && bookings.length > 0 ? (
            bookings.map((booking) => (
              <tr key={booking.id}>
                <td className="fw-semibold text-primary">{booking.id}</td>
                <td>
                  <div className="fw-semibold">{booking.customerName}</div>
                  {booking.dropoffLocation && (
                    <div className="text-muted mt-1" style={{ fontSize: '0.75rem' }}>
                      <span className="me-2" title="Drop-off Location">
                        <i className="fas fa-map-marker-alt text-danger me-1"></i>
                        {booking.dropoffLocation}
                      </span>
                      {booking.purpose && (
                        <span className="badge bg-secondary-subtle text-secondary" style={{ fontSize: '0.65rem' }}>
                          {booking.purpose}
                        </span>
                      )}
                    </div>
                  )}
                </td>
                <td className="fw-semibold">
                  <div className="d-flex align-items-center gap-2">
                    <img 
                      src={getCarImage(booking.carName)} 
                      alt={booking.carName} 
                      style={{ 
                        width: '44px', 
                        height: '26px', 
                        objectFit: 'contain', 
                        borderRadius: '4px', 
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid var(--border-color)',
                        padding: '1px'
                      }} 
                    />
                    <span>{booking.carName}</span>
                  </div>
                </td>
                <td>{booking.pickupDate}</td>
                <td>{booking.returnDate}</td>
                <td>
                  <span className={getStatusClass(booking.status)}>
                    {booking.status}
                  </span>
                </td>
                <td className="fw-bold">{booking.price}</td>
                <td>
                  <div className="d-flex gap-2">
                    {booking.status === 'Pending' && (
                      <button 
                        className="btn btn-sm btn-outline-light border border-success border-opacity-20 text-success p-1 px-2"
                        title="Approve Booking"
                        style={{ borderRadius: '6px', fontSize: '0.8rem', cursor: 'pointer' }}
                        onClick={() => onUpdateBookingStatus && onUpdateBookingStatus(booking.id, 'Confirmed')}
                      >
                        <i className="fas fa-check"></i>
                      </button>
                    )}
                    {booking.status === 'Confirmed' && (
                      <button 
                        className="btn btn-sm btn-outline-light border border-primary border-opacity-20 text-primary p-1 px-2"
                        title="Mark Completed"
                        style={{ borderRadius: '6px', fontSize: '0.8rem', cursor: 'pointer' }}
                        onClick={() => onUpdateBookingStatus && onUpdateBookingStatus(booking.id, 'Completed')}
                      >
                        <i className="fas fa-flag-checkered"></i>
                      </button>
                    )}
                    {(booking.status === 'Pending' || booking.status === 'Confirmed') && (
                      <button 
                        className="btn btn-sm btn-outline-light border border-warning border-opacity-20 text-warning p-1 px-2"
                        title="Cancel Booking"
                        style={{ borderRadius: '6px', fontSize: '0.8rem', cursor: 'pointer' }}
                        onClick={() => onUpdateBookingStatus && onUpdateBookingStatus(booking.id, 'Cancelled')}
                      >
                        <i className="fas fa-ban"></i>
                      </button>
                    )}
                    <button 
                      className="btn btn-sm btn-outline-light border border-danger border-opacity-20 text-danger p-1 px-2"
                      title="Delete Booking Record"
                      style={{ borderRadius: '6px', fontSize: '0.8rem', cursor: 'pointer' }}
                      onClick={() => onDeleteBooking && onDeleteBooking(booking.id)}
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" className="text-center py-4 text-muted">
                No bookings found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default BookingTable;
