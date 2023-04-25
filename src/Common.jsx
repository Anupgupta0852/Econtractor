import React from "react";
import "./home.css";
// import web from "./img1.png";
import { NavLink } from "react-router-dom";

const Common = (props) => {
  return (
    <>
      <section
        id="header "
        className="homee bodi d-flex align-items-center mr-10"
      >
        <div className="container-fluid ">
          <div className="rows main">
            <div className="col-11 mx-auto">
              <div className="row ">
                <div className="col-md-6 pt-5 pt-lg-0 order=2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>{props.name}</h1>
                  <h1 className="brand-name">
                    <strong> Econtractor</strong>
                  </h1>
                  <h3 className="myy-3">
                  {props.info}
                  </h3>
                  <div className="mt-3 ">
                    <NavLink to={props.visit} className="btn-get-started">
                      {props.btname}
                    </NavLink>
                  </div>
                </div>
                <div className=" col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={props.imgsrc}
                    className="img-fluid-animated"
                    alt="home-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;
