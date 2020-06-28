import React from 'react';

// eslint-disable-next-line import/extensions
import HomeMain from '../Home/main.jsx';
import About from '../About/About';
// eslint-disable-next-line import/extensions
import MyWork from '../MyWork/myWork.jsx';
// eslint-disable-next-line import/extensions
import Contact from '../Contact/Contact.jsx';

const Main = () => (
  <>
    <HomeMain title="Section 1" dark id="section1" />
    <About title="Section 2" dark={false} id="about" />
    <MyWork id="myWork" />
    <Contact id="contact" />
  </>
);
export default Main;
