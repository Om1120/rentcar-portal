import React from "react";
import carrent from "../assets/carrent.png";

function About() {
  return (
    <section id="about" className="section-padding py-5">
      <div className="container-fluid px-4 px-lg-5">
        <div className="row align-items-center">

          {/* Image Section */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <img
              src={carrent}
              alt="Car Rental"
              className="img-fluid rounded-4 shadow-lg w-100"
              style={{ objectFit: "cover", maxHeight: "500px" }}
            />
          </div>

          {/* Text Section */}
          <div className="col-lg-6 px-lg-5">
            <h6 className="text-primary fw-bold text-uppercase mb-2">
              About Our Company
            </h6>

            <h2 className="fw-bold mb-4">
              Your Trusted Partner in Car Rentals
            </h2>

            <p className="text-muted mb-4 lead">
              With over a decade of excellence, DriveX provides a premium rental experience defined by uncompromising safety and world-class service. We meticulously maintain our elite fleet to ensure every journey is as seamless as it is sophisticated, prioritizing your satisfaction at every turn. Discover the peace of mind that comes with ten years of expertise and choose a partner that values your journey as much as you do.
            </p>

            <div className="row mt-1">

              {/* Vehicles */}
              <div className="col-6 mb-3">
                <div className="d-flex align-items-center">
                  <div className="icon-box bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: "60px", height: "60px" }}>
                    <i className="fas fa-car-side fa-2x"></i>
                  </div>
                  <div>
                    <h3 className="fw-bold mb-0">150+</h3>
                    <p className="text-muted mb-0">Vehicles</p>
                  </div>
                </div>
              </div>

              {/* Customers */}
              <div className="col-6 mb-3">
                <div className="d-flex align-items-center">
                  <div className="icon-box bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: "60px", height: "60px" }}>
                    <i className="fas fa-users fa-2x"></i>
                  </div>
                  <div>
                    <h3 className="fw-bold mb-0">10k+</h3>
                    <p className="text-muted mb-0">Customers</p>
                  </div>
                </div>
              </div>

              {/* Locations */}
              <div className="col-6 mb-3">
                <div className="d-flex align-items-center">
                  <div className="icon-box bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: "60px", height: "60px" }}>
                    <i className="fas fa-map-marked-alt fa-2x"></i>
                  </div>
                  <div>
                    <h3 className="fw-bold mb-0">25+</h3>
                    <p className="text-muted mb-0">Locations</p>
                  </div>
                </div>
              </div>

              {/* Experience */}
              <div className="col-6 mb-3">
                <div className="d-flex align-items-center">
                  <div className="icon-box bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: "60px", height: "60px" }}>
                    <i className="fas fa-award fa-2x"></i>
                  </div>
                  <div>
                    <h3 className="fw-bold mb-0">10+</h3>
                    <p className="text-muted mb-0">Years Exp</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;