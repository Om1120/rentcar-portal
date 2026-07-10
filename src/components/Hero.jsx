import React from 'react';
import { Link } from 'react-router-dom';
import heroBg from '../assets/hero.png';

function Hero() {
  const heroStyle = {
    background: `linear-gradient(rgba(2, 6, 23, 0.75), rgba(2, 6, 23, 0.65)), url(${heroBg}) center/cover`
  };

  return (
    <section id="home" className="hero-section custom-padding" style={heroStyle}>
      <div className="row justify-content-center w-100 m-0">
        <div className="col-lg-8">
          <h1 className="display-3 fw-bold text-white mb-4">Uncompromising Luxury. Seamless Journeys.</h1>
          <p className="lead text-white mb-5 fs-4">
            Experience the prestige and thrill of driving our curated fleet of premium vehicles. 
            From sophisticated business travel to weekend getaways, find your perfect match at competitive rates.
          </p>
          <div className="d-flex gap-3 justify-content-center">
            <Link to="/vehicles" className="btn btn-primary px-4 py-2 rounded-pill fw-bold text-white text-decoration-none">
              View Vehicles
            </Link>
            <Link to="/book-now" className="btn btn-outline-light px-4 py-2 rounded-pill fw-bold text-decoration-none">
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
