import React, { useState } from 'react';

function InquiryForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Input states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [car, setCar] = useState('');
  const [pickupLocation, setPickupLocation] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const newInquiry = {
      id: Date.now(),
      type: 'Booking Request',
      name: name,
      email: email,
      subject: `Booking Request: ${car.toUpperCase()}`,
      message: `Phone: ${phone} | Car: ${car} | Pickup: ${pickupLocation} (from ${pickupDate} to ${returnDate})${message ? ` | Special Requests: ${message}` : ''}`,
      date: new Date().toLocaleString('en-IN')
    };

    // Save to localStorage
    const existing = JSON.parse(localStorage.getItem('client_inquiries') || '[]');
    existing.push(newInquiry);
    localStorage.setItem('client_inquiries', JSON.stringify(existing));

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form states
      setName('');
      setEmail('');
      setPhone('');
      setCar('');
      setPickupLocation('');
      setPickupDate('');
      setReturnDate('');
      setMessage('');

      setTimeout(() => {
        setIsSubmitted(false);
      }, 4000);
    }, 1500);
  };

  return (
    <section id="booking" className="section-padding bg-light">
      <div className="container-fluid custom-padding">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="inquiry-form-container p-4 p-md-5 shadow-lg border-0" style={{ borderRadius: '20px' }}>
              <div className="text-center mb-4">
                <h2 className="fw-bold" style={{ color: '#020617' }}>Book Your Car</h2>
                <p className="text-muted">Fill out the form below and we will contact you shortly.</p>
              </div>

              {isSubmitted && (
                <div className="alert alert-success fw-bold d-flex align-items-center mb-4" role="alert" style={{ borderRadius: '12px' }}>
                  <i className="fas fa-check-circle fs-4 me-2"></i>
                  Booking request sent successfully! We'll be in touch soon.
                </div>
              )}

              <form id="inquiryForm" onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Full Name <span className="text-danger">*</span></label>
                    <input 
                      type="text" 
                      className="form-control form-control-lg bg-light" 
                      required 
                      placeholder="Your name" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      style={{ border: '1px solid #e2e8f0', borderRadius: '10px' }} 
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Email Address <span className="text-danger">*</span></label>
                    <input 
                      type="email" 
                      className="form-control form-control-lg bg-light" 
                      required 
                      placeholder="Your Email Id" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={{ border: '1px solid #e2e8f0', borderRadius: '10px' }} 
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Phone Number <span className="text-danger">*</span></label>
                    <input 
                      type="tel" 
                      className="form-control form-control-lg bg-light" 
                      required 
                      placeholder="+91 234 567 8900" 
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      style={{ border: '1px solid #e2e8f0', borderRadius: '10px' }} 
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Select Car <span className="text-danger">*</span></label>
                    <select 
                      className="form-select form-select-lg bg-light" 
                      required 
                      value={car}
                      onChange={(e) => setCar(e.target.value)}
                      style={{ border: '1px solid #e2e8f0', borderRadius: '10px' }}
                    >
                      <option value="" disabled>Choose a vehicle...</option>
                      <option value="luxury sports car">Luxury Sports Car</option>
                      <option value="premium suv">Premium SUV</option>
                      <option value="compact electric">Compact Electric</option>
                      <option value="vintage convertible">Vintage Convertible</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <label className="form-label fw-semibold">Pickup Location <span className="text-danger">*</span></label>
                    <input 
                      type="text" 
                      className="form-control form-control-lg bg-light" 
                      required 
                      placeholder="Enter Location" 
                      value={pickupLocation}
                      onChange={(e) => setPickupLocation(e.target.value)}
                      style={{ border: '1px solid #e2e8f0', borderRadius: '10px' }} 
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Pickup Date <span className="text-danger">*</span></label>
                    <input 
                      type="date" 
                      className="form-control form-control-lg bg-light" 
                      required 
                      value={pickupDate}
                      onChange={(e) => setPickupDate(e.target.value)}
                      style={{ border: '1px solid #e2e8f0', borderRadius: '10px' }} 
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Return Date <span className="text-danger">*</span></label>
                    <input 
                      type="date" 
                      className="form-control form-control-lg bg-light" 
                      required 
                      value={returnDate}
                      onChange={(e) => setReturnDate(e.target.value)}
                      style={{ border: '1px solid #e2e8f0', borderRadius: '10px' }} 
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label fw-semibold">Additional Message <span className="text-muted fw-normal">(Optional)</span></label>
                    <textarea 
                      className="form-control bg-light" 
                      rows="3" 
                      placeholder="Any special requests?" 
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      style={{ border: '1px solid #e2e8f0', borderRadius: '10px' }}
                    ></textarea>
                  </div>
                  <div className="col-12 mt-4">
                    <button type="submit" className="btn btn-primary btn-lg w-100 fw-bold" disabled={isSubmitting} style={{ borderRadius: '10px' }}>
                      {isSubmitting ? 'Processing...' : 'Submit Booking Request'}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InquiryForm;
