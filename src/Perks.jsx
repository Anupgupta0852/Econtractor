import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./perks.css";
const Perks = () => {
  return (
    <section className="text-center shadow section section-min">
      <div className="about-counter" id="about-counter">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4 col-sm-4 cnt1 about-counter-single">
              <div className="counter">
                <h2>FREE SERVICES</h2>
                <p>All our service are free online</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 cnt2 about-counter-single">
              <div className="counter">
                <h2>EASY TO USE</h2>
                <p> Easy interface to interact</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 cnt3 about-counter-single">
              <div className="counter">
                <h2>Support 24/7</h2>
                <p> You can access srvices at anytime</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Perks;
