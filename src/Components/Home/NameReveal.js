import React, { Component } from 'react';
import './NameStyle.css';
const NameReveal = ({ text }) => {
    return (
        <div className="Name">
            <p>{text}</p>
        </div>
    );
};

export default NameReveal;
