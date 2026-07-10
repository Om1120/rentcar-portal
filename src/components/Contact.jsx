import React, { useState } from 'react';
import { toast } from 'react-toastify';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !subject || !message) {
      toast.error('Please fill in all fields');
      return;
    }

    const newInquiry = {
      id: Date.now(),
      type: 'Contact Message',
      name: name,
      email: email,
      subject: subject,
      message: message,
      date: new Date().toLocaleString('en-IN')
    };

    // Save to localStorage
    const existing = JSON.parse(localStorage.getItem('client_inquiries') || '[]');
    existing.push(newInquiry);
    localStorage.setItem('client_inquiries', JSON.stringify(existing));

    toast.success('Your message has been sent successfully!');
    
    // Clear inputs
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-fluid custom-padding">
        <div className="text-center mb-5">
          <h2 className="fw-bold section-title">Contact Us</h2>
          <p className="text-muted">Have questions? We're here to help.</p>
        </div>
        <div className="row g-4">
          <div className="col-lg-4">
            <div className="d-flex flex-column gap-4 h-100">
              <div className="contact-info-card d-flex align-items-center">
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <h5 className="fw-bold mb-1">Our Location</h5>
                  <p className="text-muted mb-0">Shopper's Plaza, Chimanlal Girdharlal Rd, Opp Municipal Market, Abad, Navrangpura, Ahmedabad, Gujarat 380009, India</p>
                </div>
              </div>
              <div className="contact-info-card d-flex align-items-center">
                <div className="contact-icon">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div>
                  <h5 className="fw-bold mb-1">Phone Number</h5>
                  <p className="text-muted mb-0">+91 78782 89727</p>
                </div>
              </div>
              <div className="contact-info-card d-flex align-items-center">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <h5 className="fw-bold mb-1">Email Address</h5>
                  <p className="text-muted mb-0">drivex007@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="contact-info-card">
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <input 
                      type="text" 
                      className="form-control form-control-lg bg-light border-0" 
                      placeholder="Your Name" 
                      required 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6">
                    <input 
                      type="email" 
                      className="form-control form-control-lg bg-light border-0" 
                      placeholder="Your Email" 
                      required 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="col-12">
                    <input 
                      type="text" 
                      className="form-control form-control-lg bg-light border-0" 
                      placeholder="Subject" 
                      required 
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                    />
                  </div>
                  <div className="col-12">
                    <textarea 
                      className="form-control bg-light border-0" 
                      rows="5" 
                      placeholder="Your Message" 
                      required 
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary btn-lg fw-bold px-5">Send Message</button>
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

export default Contact;
