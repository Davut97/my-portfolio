import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import device from '../../Assets/Responsive/breakpoint';
import './NameStyle.css';
const TitleReveal = ({ text }) => {
    return (
        <>
            <p className="Job">{text}</p>
        </>
    );
};

export default TitleReveal;
