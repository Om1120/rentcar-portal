import React, { useState } from 'react';

function Employees({ employeesList, onOpenAddEmployee, onEditEmployee, onDeleteEmployee }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEmployees = employeesList.filter(emp => 
    emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    emp.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    emp.phone.includes(searchTerm) ||
    emp.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Active':
        return (
          <span 
            className="badge bg-success-subtle text-success border border-success border-opacity-20 px-2.5 py-1"
            style={{ borderRadius: '6px', fontSize: '0.75rem', fontWeight: 600 }}
          >
            Active
          </span>
        );
      case 'On Leave':
        return (
          <span 
            className="badge bg-warning-subtle text-warning border border-warning border-opacity-20 px-2.5 py-1"
            style={{ borderRadius: '6px', fontSize: '0.75rem', fontWeight: 600 }}
          >
            On Leave
          </span>
        );
      case 'Inactive':
        return (
          <span 
            className="badge bg-danger-subtle text-danger border border-danger border-opacity-20 px-2.5 py-1"
            style={{ borderRadius: '6px', fontSize: '0.75rem', fontWeight: 600 }}
          >
            Inactive
          </span>
        );
      default:
        return (
          <span 
            className="badge bg-secondary-subtle text-secondary border border-secondary border-opacity-20 px-2.5 py-1"
            style={{ borderRadius: '6px', fontSize: '0.75rem', fontWeight: 600 }}
          >
            {status}
          </span>
        );
    }
  };

  return (
    <div className="container-fluid px-0">
      <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center mb-4 gap-3">
        <div>
          <h2 className="fw-bold mb-1">Employees Registry</h2>
          <p className="text-muted mb-0">Manage employee directories, roles, contact information, and joining status.</p>
        </div>
        <button 
          className="btn btn-primary px-4 py-2 d-flex align-items-center gap-2"
          onClick={onOpenAddEmployee}
        >
          <i className="fas fa-user-plus"></i>
          <span>Add Employee</span>
        </button>
      </div>

      <div className="glass-card mb-4">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="nav-search-bar w-100">
              <i className="fas fa-search"></i>
              <input 
                type="text" 
                placeholder="Search name, email, role..." 
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
                <th>Employee Name</th>
                <th>Role / Designation</th>
                <th>Email ID</th>
                <th>Phone Number</th>
                <th>Joining Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredEmployees.length > 0 ? (
                filteredEmployees.map((emp) => (
                  <tr key={emp.id}>
                    <td>
                      <div className="d-flex align-items-center gap-3">
                        <img 
                          src={emp.avatar} 
                          alt={emp.name} 
                          className="rounded-circle"
                          style={{ width: '40px', height: '40px', objectFit: 'cover', border: '2px solid var(--secondary)' }}
                        />
                        <div>
                          <span className="fw-semibold d-block" style={{ color: 'var(--text-main)' }}>{emp.name}</span>
                          <small className="text-muted" style={{ fontSize: '0.75rem' }}>ID: {emp.id}</small>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="fw-medium text-light">{emp.role}</span>
                    </td>
                    <td>{emp.email}</td>
                    <td>{emp.phone}</td>
                    <td>{emp.joiningDate}</td>
                    <td>{getStatusBadge(emp.status)}</td>
                    <td>
                      <div className="d-flex gap-2">
                        <button 
                          className="btn btn-sm btn-outline-light border border-secondary border-opacity-20 p-2"
                          title="Edit Employee Details"
                          style={{ color: 'var(--text-main)', borderRadius: '8px' }}
                          onClick={() => onEditEmployee(emp)}
                        >
                          <i className="fas fa-edit"></i>
                        </button>
                        <button 
                          className="btn btn-sm btn-outline-light border border-danger border-opacity-20 text-danger p-2"
                          title="Delete Employee Profile"
                          style={{ borderRadius: '8px' }}
                          onClick={() => onDeleteEmployee(emp.id, emp.name)}
                        >
                          <i className="fas fa-trash"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center py-4 text-muted">No employees found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Employees;
