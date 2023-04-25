import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import "./slide.css";
const Slide = () => {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="w-10 h-10"
          src="https://res.cloudinary.com/dz4wzkogr/image/upload/v1681293143/slider4_rsvl3o.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Get yourself a contractor hired</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="w-10 h-10"
          src="https://res.cloudinary.com/dz4wzkogr/image/upload/v1681292946/slider1_q2yolv.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="w-10 h-10"
          src="https://res.cloudinary.com/dz4wzkogr/image/upload/v1681292998/slider3_ry2gkt.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slide;
