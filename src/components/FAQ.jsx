import React from 'react';

function FAQ() {
  return (
    <section id="faq" className="section-padding bg-light">
      <div className="container-fluid custom-padding">
        <div className="text-center mb-5">
          <h2 className="fw-bold section-title">Frequently Asked Questions</h2>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="accordion" id="faqAccordion">
              
              <div className="accordion-item mb-3 border-0 shadow-sm rounded">
                <h2 className="accordion-header" id="headingOne">
                  <button className="accordion-button fw-bold collapsed rounded" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                    What documentation is required to rent a vehicle?
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                  <div className="accordion-body text-muted">
                    To ensure a seamless rental process, please present the following valid documents at the time of pickup:
                    <ul className="mt-2 mb-0 ps-3">
                      <li><strong>Government-Issued ID or Passport:</strong> Required for identity verification.</li>
                      <li><strong>Valid Driver’s License:</strong> A full, unexpired license held for at least one year (international drivers may need an International Driving Permit).</li>
                      <li><strong>Credit Card:</strong> Issued in the primary driver's name for the security deposit hold and rental charges.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="accordion-item mb-3 border-0 shadow-sm rounded">
                <h2 className="accordion-header" id="headingTwo">
                  <button className="accordion-button fw-bold collapsed rounded" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Is comprehensive insurance coverage included in the rental price?
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                  <div className="accordion-body text-muted">
                    Yes, third-party liability coverage and basic Collision Damage Waiver (CDW) are included in our standard rental rates. For enhanced protection and complete peace of mind, we also offer optional Premium Coverage plans (including zero-deductible options) at a minimal daily fee.
                  </div>
                </div>
              </div>

              <div className="accordion-item mb-3 border-0 shadow-sm rounded">
                <h2 className="accordion-header" id="headingThree">
                  <button className="accordion-button fw-bold collapsed rounded" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Can I choose a different drop-off location (One-Way Rental)?
                  </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                  <div className="accordion-body text-muted">
                    Absolutely. We accommodate one-way rentals to offer you maximum flexibility. You can return the vehicle to any of our authorized drop-off depots. Please note that a one-way service fee may apply to cover relocation logistics, depending on the distance between the branches.
                  </div>
                </div>
              </div>

              <div className="accordion-item mb-3 border-0 shadow-sm rounded">
                <h2 className="accordion-header" id="headingFour">
                  <button className="accordion-button fw-bold collapsed rounded" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    Are there age requirements or driving experience limits to rent a vehicle?
                  </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#faqAccordion">
                  <div className="accordion-body text-muted">
                    To rent a vehicle with DriveX, the primary driver must be at least 21 years of age and hold a valid, unrestricted driver's license. For safety reasons, we require a minimum of one year of active driving experience. Young driver surcharges may apply for renters under the age of 25 on select luxury vehicle classes.
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

export default FAQ;
