import React from 'react';
import { Carousel } from 'react-bootstrap';
import One from '../Images/One.jpg';
import Two from '../Images/Two.jpg';
import Three from '../Images/Three.jpg';



function CarouselBanner() {
  return (
    <div className="container-fluid">
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={One}
          alt="SangTech_banner"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Two}
          alt="Hospital_banner"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Three}
          alt="Food_banner"
        />
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default CarouselBanner;
