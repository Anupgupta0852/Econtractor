import React from "react";
import "./home.css";
// import { NavLink } from "react-router-dom";
import Common from "./Common.jsx";
import web from "./img.png";
import Perks from "./Perks.jsx";
import { Carousel } from "bootstrap";
import Slide from"./Slide.jsx";
const Home = () => {
  return (
    <>
    <Slide/>
      <Common
        name="Enjoy Our services with"
        imgsrc={web}
        visit="/service"
        btname="Get Started"
      />
      <Perks />
      
    </>
  );
};

export default Home;
