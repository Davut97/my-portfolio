/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { AnimatedOnScroll } from 'react-animated-css-onscroll';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// eslint-disable-next-line import/extensions
import './style.css';

const myWork = () => {
  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="myWorkContainer">
      <AnimatedOnScroll animationIn="zoomInUp">
        <h5 className="header">FEATURED PROJECTS</h5>
        <div className="header-bar" />
      </AnimatedOnScroll>

      {/* <div className="contentContainer"> */}
      <div className="sliderSection">
        <Slider {...settings}>
          <div className="overlay-image _b1 image _b2">
            <img
              className="sliderPanel"
              src="https://i.ibb.co/x5hcKCz/Screenshot-from-2020-09-12-18-23-48.png"
              alt="test"
            />
            <div className=" hover _b3 ">
              <div className=" text _2 ">
                <p>Refubook</p>
                <p>
                  Website to help refuges implemented using: React, Firebase,
                  Wordprss as a headless CMS
                </p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/ReCoded-Org/capstone-istanbul-refubook"
                >
                  Github ||
                </a>
                <a href="https://refubook.netlify.app/"> Demo</a>
              </div>
            </div>
          </div>
          <div className="overlay-image _b1 image _b2">
            <img
              className="sliderPanel"
              src="https://i.ibb.co/1f15vfG/artboard-2-2x.png"
              alt="test"
            />
            <div className=" hover _b3 ">
              <div className=" text _2 ">
                <p>Attendance system</p>
                <p>
                  Created a paperless attendance system as a measure to contain
                  the spread of COVID-19 in schools. Students can easily sign in
                  a lecture. Teachers have more control on the attendance list.
                  Implemented with Node.js, TypeScript, Docker, JWT, Jest ,React
                  and PostgreSQL.
                </p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/Davut97/attendance-system"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
          <div className="overlay-image _b1">
            <img
              className="sliderPanel image _b2"
              src="https://i.ibb.co/dKgFCxg/Screenshot-from-2020-06-25-22-38-03.png"
              alt="test"
            />
            <div className=" hover _b3 ">
              <div className=" text _2 ">
                <p>Shopping list Organizer</p>
                <p>Created to organize shopping lists using: React, Firebase</p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/Davut97/ShoppingList"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
    // </div>
  );
};
export default myWork;
