import React from "react";
import "./footer.css";
import { NavLink } from "react-router-dom";
const Footer = () => {
  const currentyear = new Date().getFullYear();
  return (
    <>
      {/* <footer className="bg-light text-center footer">
        <p>
          © {currentyear} Copyright: PseudoHOME. All Rights Reserved | Terms and
          Conditions{" "}
        </p>
      </footer> */}

      <footer className="page-footer font-small teal pt-4 footercolor">
        <div className="container-fluid text-center text-md-left">
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
              <h5 className="text-uppercase font-weight-bold">Support</h5>
              <div className="font-weight-bold">
              <p className="mb-0">Anup Gupta</p>
                <p className="mb-0">Deepesh Sahu</p>
                <p className="mb-0">Harshdeep Singh</p>
                <p className="mb-0">Harshit Kapse</p>
              </div>
            </div>

            <hr className="clearfix w-100 d-md-none pb-3" />

            <div className="col-md-6 mb-md-0 mb-3">
              <h5 className="text-uppercase font-weight-bold">Information</h5>
              <p>
              There is a major important person who is an architect. Hire an architect for a specified, professional design.
In similar fashion, there are many other people involved in the construction of a house which we need to hire upon for the construction.
              </p>
            </div>
          </div>
        </div>

        <div className="footer-copyright text-center py-3 footer">
          © {currentyear} Copyright: Econtractor. All Rights Reserved | Terms
          and Conditions
          <NavLink to="https://mdbootstrap.com/" className="colh">
            {" "}
            "Econtractor"
          </NavLink>
        </div>
      </footer>
    </>
  );
};

export default Footer;
