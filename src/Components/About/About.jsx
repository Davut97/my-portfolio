import React from 'react';
import './style.css';
import { Image } from 'react-bootstrap';
import Typed from 'react-typed';
import 'react-typed/dist/animatedCursor.css';
import FadeInLeft from 'react-animations/lib/fade-in-left';
import FadeInRight from 'react-animations/lib/fade-in-right';
import styled, { keyframes } from 'styled-components';
import { AnimatedOnScroll } from 'react-animated-css-onscroll';

const About = () => {
  const FadeInLeftAnimation = keyframes`${FadeInLeft}`;
  // eslint-disable-next-line no-unused-vars
  const FadeInLeftDiv = styled.div`
    animation: 2s ${FadeInLeftAnimation};
  `;
  const FadeInRightAnimation = keyframes`${FadeInRight}`;
  // eslint-disable-next-line no-unused-vars
  const FadeInRightDiv = styled.div`
    animation: 2s ${FadeInRightAnimation};
  `;
  return (
    <div className="half-black-half-white " id="about">
      <AnimatedOnScroll animationIn="fadeInDown">
        <h5 className="aboutHeader">ABOUT</h5>
        <div className="header-bar" />
      </AnimatedOnScroll>
      <div
        className="aboutRow"
        style={{
          fontSize: '22px',
          color: '#ababab',
        }}
      >
        <div className="textContainer">
          <AnimatedOnScroll animationIn="bounceInLeft">
            {' '}
            <h6
              style={{
                color: 'white',
                fontWeight: '400',
              }}
            >
              Who's this guy?
            </h6>
            <p style={{ lineHeight: '27px' }}>
              I'm a Front-End Developer Living In Istanbul, Turkey.
              <br />
              I have serious passion for UI effects and animations.
              <br />I love to Create {''}
              <Typed
                className="strongy"
                strings={['Fast', 'Responsive', 'Dynamic']}
                typeSpeed={50}
                backSpeed={50}
                loop
              />
              <br />
              Websites With Great User experiences.
            </p>
          </AnimatedOnScroll>
        </div>
        <div className="pictureContainer">
          <AnimatedOnScroll animationIn="bounceInRight">
            <Image
              style={{
                width: '70%',
                height: '40%',
                margin: ' 0 auto',
              }}
              src="https://i.ibb.co/qsfp4NH/IMG-20181227-161608-642.jpg"
              rounded
              fluid
            />
          </AnimatedOnScroll>
        </div>
      </div>
    </div>
  );
};
export default About;
