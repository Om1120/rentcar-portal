import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="container-fluid custom-padding">
        <div className="row g-4 mb-4">
          <div className="col-lg-6">
            <h4 className="fw-bold mb-3">
              <i className="fas fa-car-side me-2 text-primary"></i>
              DriveX
            </h4>
            <p className="pe-lg-4">
              Providing premium car rental services across the country. Your journey, our priority. Safe, comfortable, and reliable vehicles for all your needs.
            </p>
            <div className="mt-4">
              <span className="social-icon"><i className="fab fa-facebook-f"></i></span>
              <span className="social-icon"><i className="fab fa-twitter"></i></span>
              <span className="social-icon"><i className="fab fa-instagram"></i></span>
              <span className="social-icon"><i className="fab fa-linkedin-in"></i></span>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5>Quick Links</h5>
            <span className="footer-link d-block">Home</span>
            <span className="footer-link d-block">About Us</span>
            <span className="footer-link d-block">Our Vehicles</span>
            <span className="footer-link d-block">Services</span>
            <span className="footer-link d-block">Contact</span>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5>Our Services</h5>
            <span className="footer-link d-block">City Transfer</span>
            <span className="footer-link d-block">Airport Transfer</span>
            <span className="footer-link d-block">Business Trips</span>
            <span className="footer-link d-block">Wedding Cars</span>
            <span className="footer-link d-block">Long Term Rentals</span>
          </div>
        </div>
        <hr className="footer-divider" />
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <p className="mb-0">&copy; {new Date().getFullYear()} DriveX Car Rentals. All Rights Reserved.</p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <span className="footer-link me-4 mb-0">Privacy Policy</span>
            <span className="footer-link mb-0">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
