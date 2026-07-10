import React, { useState } from 'react';
import BookingTable from '../components/BookingTable';

function Bookings({ bookingsList, onOpenCreateBooking, onUpdateBookingStatus, onDeleteBooking }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  const filteredBookings = bookingsList.filter((booking) => {
    const matchesSearch = 
      booking.customerName.toLowerCase().includes(searchTerm.toLowerCase()) || 
      booking.carName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || booking.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="container-fluid px-0">
      <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center mb-4 gap-3">
        <div>
          <h2 className="fw-bold mb-1">Rental Bookings</h2>
          <p className="text-muted mb-0">Track customer rental schedules, reservation details, status badges, and pricing.</p>
        </div>
        <button 
          className="btn btn-primary px-4 py-2 d-flex align-items-center gap-2"
          onClick={onOpenCreateBooking}
        >
          <i className="fas fa-calendar-plus"></i>
          <span>Create Booking</span>
        </button>
      </div>

      <div className="glass-card mb-4">
        <div className="row g-3 align-items-center">
          <div className="col-12 col-md-5 col-lg-4">
            <div className="nav-search-bar w-100">
              <i className="fas fa-search"></i>
              <input 
                type="text" 
                placeholder="Search Booking ID, Customer, Car..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ height: '42px' }}
              />
            </div>
          </div>
          <div className="col-12 col-md-7 col-lg-8 d-flex justify-content-md-end gap-2 flex-wrap">
            {['All', 'Pending', 'Confirmed', 'Completed', 'Cancelled'].map((status) => (
              <button
                key={status}
                onClick={() => setStatusFilter(status)}
                className={`btn btn-sm px-3 py-2 ${
                  statusFilter === status 
                    ? 'btn-primary' 
                    : 'btn-outline-light text-secondary border border-secondary border-opacity-10 bg-transparent'
                }`}
                style={{
                  color: statusFilter === status ? '#fff' : 'var(--text-main)',
                  borderRadius: '10px'
                }}
              >
                {status}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="glass-card">
        <BookingTable 
          bookings={filteredBookings} 
          onUpdateBookingStatus={onUpdateBookingStatus} 
          onDeleteBooking={onDeleteBooking} 
        />
      </div>
    </div>
  );
}

export default Bookings;
