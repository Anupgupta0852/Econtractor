import React from "react";
import "./home.css";
// import { NavLink } from "react-router-dom";
import Common from "./Common.jsx";
import web from "./homeimg.png";
import Perks from "./Perks.jsx";
import { Carousel } from "bootstrap";
const Home = () => {
  return (
    <>
      <Common
        name="Enjoy Our services with"
        imgsrc={web}
        visit="/service"
        btname="Get Started"
        info="Get materials for building home easily"
      />
      <Perks />
      
    </>
  );
};

export default Home;
