import React from "react";
import Common from "./Common.jsx";
import web2 from "./homeimg.png";
import "./styles.css";
// import web from "./img1.png";
// import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <>
      <Common
        name="About US"
        imgsrc={web2}
        visit="/Contact"
        btname="Contact US"
        info="Econtractor is a Professional Platform. Here we will provide you only interesting content, 
        which you will like very much. We're dedicated to providing you the best of services, 
        with a focus on dependability and Find the information about people involved in construction of a building. 
        We're working to turn our passion for providing best we can into a booming online website. 
        We hope you enjoy our website as much as we enjoy offering them to you.
        I will keep posting more important posts on my Website for all of you. Please give your support and love.
        Thanks For Visiting Our Site
        Have a nice day!"
      />
    </>
  );
};

export default About;
