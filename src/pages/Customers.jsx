import React, { useState } from 'react';

function Customers({ customersList, onOpenAddCustomer, onEditCustomer, onDeleteCustomer }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCustomers = customersList.filter(cust => 
    cust.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cust.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cust.phone.includes(searchTerm)
  );

  return (
    <div className="container-fluid px-0">
      <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center mb-4 gap-3">
        <div>
          <h2 className="fw-bold mb-1">Customers Registry</h2>
          <p className="text-muted mb-0">Manage renter profiles, contact directories, and analyze lifetime bookings value.</p>
        </div>
        <button 
          className="btn btn-primary px-4 py-2 d-flex align-items-center gap-2"
          onClick={onOpenAddCustomer}
        >
          <i className="fas fa-user-plus"></i>
          <span>Add Customer</span>
        </button>
      </div>

      <div className="glass-card mb-4">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="nav-search-bar w-100">
              <i className="fas fa-search"></i>
              <input 
                type="text" 
                placeholder="Search name, email, phone..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ height: '42px' }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="glass-card">
        <div className="custom-table-container">
          <table className="custom-table">
            <thead>
              <tr>
                <th>Customer Name</th>
                <th>Email ID</th>
                <th>Phone Number</th>
                <th>Total Bookings</th>
                <th>Lifetime Spent</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredCustomers.length > 0 ? (
                filteredCustomers.map((cust) => (
                  <tr key={cust.id}>
                    <td>
                      <div className="d-flex align-items-center gap-3">
                        <img 
                          src={cust.avatar} 
                          alt={cust.name} 
                          className="rounded-circle"
                          style={{ width: '40px', height: '40px', objectFit: 'cover', border: '2px solid var(--secondary)' }}
                        />
                        <div>
                          <span className="fw-semibold d-block" style={{ color: 'var(--text-main)' }}>{cust.name}</span>
                          <small className="text-muted" style={{ fontSize: '0.75rem' }}>ID: {cust.id}</small>
                        </div>
                      </div>
                    </td>
                    <td>{cust.email}</td>
                    <td>{cust.phone}</td>
                    <td className="fw-semibold">{cust.totalBookings} rentals</td>
                    <td className="fw-bold text-success">₹{cust.totalSpent.toLocaleString()}</td>
                    <td>
                      <div className="d-flex gap-2">
                        <button 
                          className="btn btn-sm btn-outline-light border border-secondary border-opacity-20 p-2"
                          title="Edit Customer Details"
                          style={{ color: 'var(--text-main)', borderRadius: '8px' }}
                          onClick={() => onEditCustomer(cust)}
                        >
                          <i className="fas fa-edit"></i>
                        </button>
                        <button 
                          className="btn btn-sm btn-outline-light border border-danger border-opacity-20 text-danger p-2"
                          title="Delete Customer Profile"
                          style={{ borderRadius: '8px' }}
                          onClick={() => onDeleteCustomer(cust.id, cust.name)}
                        >
                          <i className="fas fa-trash"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center py-4 text-muted">No customers found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Customers;
