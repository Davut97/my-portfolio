import React from 'react';
import './NameStyle.css';

// eslint-disable-next-line react/prop-types
const NameReveal = ({ text }) => (
  <div className="Name">
    <p>{text}</p>
  </div>
);

export default NameReveal;
