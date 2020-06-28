import React from 'react';
import { AnimatedOnScroll } from 'react-animated-css-onscroll';

// eslint-disable-next-line import/extensions
import Work from './work.jsx';
import './style.css';

const myWork = () => (
  <div className="myWorkContainer">
    <AnimatedOnScroll animationIn="zoomInUp">
      <h5 className="header">FEATURED PROJECT</h5>
      <div className="header-bar" />
    </AnimatedOnScroll>
    <div className="contentContainer">
      <AnimatedOnScroll animationIn="slideInLeft">
        <div xs={12} md={6}>
          <Work
            workDetail={{
              title: 'Shopping Manager',
              imageUrl:
                'https://i.ibb.co/dKgFCxg/Screenshot-from-2020-06-25-22-38-03.png',
              projectDescription:
                'Web design blog focused on helping beginners with tutorials, videos, code snippets and freebies.',
              projectUrl: '',
            }}
          />
        </div>
      </AnimatedOnScroll>
      <AnimatedOnScroll animationIn="slideInRight">
        <div className="projectDescriptionContainer">
          <h3
            style={{
              color: '#191a1d',
              fontWeight: '400',
              fontSize: '60px',
            }}
          >
            {' '}
            Trelleo
          </h3>
          <p
            className="projectDescription"
            style={{
              color: '#5E5E5E',
              fontWeight: '300',
              fontSize: '30px',
              lineHeight: '40px',
            }}
          >
            A web site build to help people with shopping Lists, User
            authentication with Firebase, and styling using MDB library
          </p>
        </div>
      </AnimatedOnScroll>
    </div>
  </div>
);
export default myWork;
