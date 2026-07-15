import React from 'react';
import clientImage1 from '../assets/r1.jpg';
import clientImage2 from '../assets/r2.jpg';
import clientImage3 from '../assets/r3.jpg';
import clientImage4 from '../assets/r4.jpg';
import clientImage5 from '../assets/r5.jpg';
import clientImage6 from '../assets/r6.jpg';

function Testimonials() {
  return (
    <section id="testimonials" className="section-padding">
      <div className="container-fluid custom-padding">
        <div className="text-center mb-5">
          <h2 className="fw-bold section-title">What Our Clients Say</h2>
          <p className="text-muted">Read reviews from our satisfied customers.</p>
        </div>

        <div className="row g-4">

          {/* Card 1 */}
          <div className="col-md-4">
            <div className="testimonial-card text-center">
              <div className="d-flex flex-column align-items-center mb-3">
                <img
                  src={clientImage1}
                  alt="Client"
                  className="testimonial-img mb-3"
                />
                <div>
                  <h5 className="fw-bold mb-0">David Miller</h5>
                </div>
              </div>
              <p className="text-muted fst-italic mb-0">
                "When it comes to speed and power, I want something that hits like a six! Rented a Mahindra Thar for a weekend trip, and it had the muscle and drive I needed for off-roading. DriveX really knocked it out of the park!"
              </p>

            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-4">
            <div className="testimonial-card text-center">
              <div className="d-flex flex-column align-items-center mb-3">
                <img
                  src={clientImage2}
                  alt="Client"
                  className="testimonial-img mb-3"
                />
                <div>
                  <h5 className="fw-bold mb-0">Samriti Mandhan</h5>
                </div>
              </div>
              <p className="text-muted fst-italic mb-0">
                "I love elegance and precision on the field, and DriveX delivered exactly that off the field. The Swift I rented handled beautifully and was incredibly stylish. Absolutely top-tier service!"
              </p>

            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-4">
            <div className="testimonial-card text-center">
              <div className="d-flex flex-column align-items-center mb-3">
                <img
                  src={clientImage3}
                  alt="Client"
                  className="testimonial-img mb-3"
                />
                <div>
                  <h5 className="fw-bold mb-0">Ricky Ponting</h5>
                </div>
              </div>
              <p className="text-muted fst-italic mb-0">
                "Leading a team requires reliable performance, and DriveX is definitely a championship-winning choice. Rented a G-Wagon for a family event, and its presence and authority on the road are unmatched. A masterclass!"
              </p>

            </div>
          </div>

          {/* Card 4 */}
          <div className="col-md-4">
            <div className="testimonial-card text-center">
              <div className="d-flex flex-column align-items-center mb-3">
                <img
                  src={clientImage4}
                  alt="Client"
                  className="testimonial-img mb-3"
                />
                <div>
                  <h5 className="fw-bold mb-0">Virat Kohli</h5>
                </div>
              </div>
              <p className="text-muted fst-italic mb-0">
                "No compromises on quality, performance, and style. Rented a BMW for my travel, and the driving dynamics were pure class. Extremely clean, fast service, and perfect cover-drive handling!"
              </p>

            </div>
          </div>

          {/* Card 5 */}
          <div className="col-md-4">
            <div className="testimonial-card text-center">
              <div className="d-flex flex-column align-items-center mb-3">
                <img
                  src={clientImage5}
                  alt="Client"
                  className="testimonial-img mb-3"
                />
                <div>
                  <h5 className="fw-bold mb-0">Mitchell Starc</h5>
                </div>
              </div>
              <p className="text-muted fst-italic mb-0">
                "I love high pace and absolute precision. Rented the Mustang Shelby GT and taking it down the highway felt as fast and thrilling as bowling a 150 km/h yorker. Unbeatable speed and service!"
              </p>

            </div>
          </div>

          {/* Card 6 */}
          <div className="col-md-4">
            <div className="testimonial-card text-center">
              <div className="d-flex flex-column align-items-center mb-3">
                <img
                  src={clientImage6}
                  alt="Client"
                  className="testimonial-img mb-3"
                />
                <div>
                  <h5 className="fw-bold mb-0">Viv Richards</h5>
                </div>
              </div>
              <p className="text-muted fst-italic mb-0">
                "A premium drive requires confidence and swagger. Rented a Toyota Fortuner, and the road presence was absolutely dominant—just like controlling the crease. DriveX is the real Master Blaster of car rentals!"
              </p>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Testimonials;