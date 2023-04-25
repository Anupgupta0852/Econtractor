import React from "react";
import "./styles.css";
import icon from "./icon.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {

  const [isExpanded, setIsExpanded] = useState('collapse')
  return (
    <>
      <div className="container-fluid nav_bg bcol">
        <div className="rows ">
          <div className="col-10 mx-auto bcol">
            <nav className="navbar bcol  navbar-expand-lg navbar-light bg-light">
              <a className="navbar-brand bcol iconn " to="/">
                <img src="https://res.cloudinary.com/dz4wzkogr/image/upload/v1671700663/Econt/icon_inrkib.png " alt="" className="icon" />
              </a>
              <button
                className="navbar-toggler"
                onClick={()=> {
                  if (isExpanded == 'collapse'){
                    setIsExpanded('')
                  }else{
                    setIsExpanded('collapse')
                  }
                }}
                type="button"
                data-toggle="collapse"
                data-target="navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className={`${isExpanded} navbar-collapse features`}
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto mb-2 mb-lg-0 mx-auto">
                  <li className="nav-item">
                    <NavLink
                      // activeClassName="menu_active"
                      className="nav-link"
                      // aria-current='page';
                      to="/"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-link"
                      to="/service"
                    >
                      Services
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-link"
                      to="/about"
                    >
                      AboutUS
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-link"
                      to="/contact"
                    >
                      ContactUS
                    </NavLink>
                  </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                  <NavLink
                    to="/login"
                    className="btn btn-primary my-2 my-sm-0 srch log"
                  >
                    Log in
                  </NavLink>
                </form>
              </div>
            </nav>
          </div>
        </div>
        <div className="dropdown-divider "></div>
      </div>
    </>
  );
};

export default Navbar;
