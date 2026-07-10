import React, { useState } from 'react';
import CarCard from '../components/CarCard.jsx';

function Cars({ carsList, onAddCar, onEditCar, onDeleteCar }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  const filteredCars = carsList.filter(car => {
    const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          car.type.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || car.status === statusFilter;
    return matchesSearch && matchesStatus;
  });
  

  return (
    <div className="container-fluid px-0">
      <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center mb-4 gap-3">
        <div>
          <h2 className="fw-bold mb-1">Fleet Management</h2>
          <p className="text-muted mb-0">View, search, filter and add new vehicles in the rental system.</p>
        </div>
        <button 
          className="btn btn-primary px-4 py-2 d-flex align-items-center gap-2"
          onClick={onAddCar}
        >
          <i className="fas fa-plus-circle"></i>
          <span>Add New Car</span>
        </button>
      </div>

      <div className="glass-card mb-4">
        <div className="row g-3 align-items-center">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="nav-search-bar w-100">
              <i className="fas fa-search"></i>
              <input 
                type="text" 
                placeholder="Search car model, category..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ height: '42px' }}
              />
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-8 d-flex justify-content-md-end gap-2 flex-wrap">
            {['All', 'Available', 'Booked', 'Maintenance'].map((status) => (
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

      <div className="row g-4">
        {filteredCars.length > 0 ? (
          filteredCars.map((car) => (
            <div key={car.id} className="col-12 col-md-6 col-lg-4">
              <CarCard 
                car={car} 
                onEdit={onEditCar} 
                onDelete={onDeleteCar} 
                isAdminMode={true} 
              />
            </div>
          ))
        ) : (
          <div className="col-12">
            <div className="glass-card text-center py-5">
              <i className="fas fa-car-crash fa-3x text-muted mb-3"></i>
              <h5>No vehicles matching filter.</h5>
              <p className="text-muted">Try updating your filters or adding a new vehicle.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cars;
