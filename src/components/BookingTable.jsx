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

function BookingTable({ bookings }) {
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
          </tr>
        </thead>
        <tbody>
          {bookings && bookings.length > 0 ? (
            bookings.map((booking) => (
              <tr key={booking.id}>
                <td className="fw-semibold text-primary">{booking.id}</td>
                <td>{booking.customerName}</td>
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
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center py-4 text-muted">
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
