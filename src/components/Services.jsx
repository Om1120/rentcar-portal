import React from 'react';

function Services() {
  return (
    <section id="services" className="section-padding bg-light">
      <div className="container-fluid custom-padding">
        <h2 className="section-title">Why Choose Us</h2>
        <div className="row g-4">
          <div className="col-md-6 col-lg-3">
            <div className="service-card text-center">
              <div className="service-icon">
                <i className="fas fa-headset"></i>
              </div>
              <h4 className="fw-bold mb-3">24/7 Support</h4>
              <p className="service-text">"We offer round-the-clock customer support for a hassle-free rental experience."</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="service-card text-center">
              <div className="service-icon">
                <i className="fas fa-tags"></i>
              </div>
              <h4 className="fw-bold mb-3">Affordable Price</h4>
              <p className="service-text">"Competitive rates with no hidden charges, ensuring the best value for your money."</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="service-card text-center">
              <div className="service-icon">
                <i className="fas fa-calendar-check"></i>
              </div>
              <h4 className="fw-bold mb-3">Easy Booking</h4>
              <p className="service-text">"A seamless and fast booking process to get you on the road or at your place in minutes."</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="service-card text-center">
              <div className="service-icon">
                <i className="fas fa-car"></i>
              </div>
              <h4 className="fw-bold mb-3">Premium Cars</h4>
              <p className="service-text">"Well-maintained luxury and economy cars for safety and comfort."</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="service-card text-center">
              <div className="service-icon">
                <i className="fas fa-undo"></i>
              </div>
              <h4 className="fw-bold mb-3">Free Cancellation</h4>
              <p className="service-text">"Enjoy free cancellation up to 24 hours before your scheduled pick-up."</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="service-card text-center">
              <div className="service-icon">
                <i className="fas fa-user-tie"></i>
              </div>
              <h4 className="fw-bold mb-3">Driver Service</h4>
              <p className="service-text">"Hire a professional driver to sit back, relax, and enjoy your journey."</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="service-card text-center">
              <div className="service-icon">
                <i className="fas fa-road"></i>
              </div>
              <h4 className="fw-bold mb-3">Unlimited Mileage</h4>
              <p className="service-text">"Focus on the drive, not the distance, with our unlimited mileage plans."</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="service-card text-center">
              <div className="service-icon">
                <i className="fas fa-map-marked-alt"></i>
              </div>
              <h4 className="fw-bold mb-3">City Transfer</h4>
              <p className="service-text">"Reliable and comfortable city transfer services for your convenience."</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
