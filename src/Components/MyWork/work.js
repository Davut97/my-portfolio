import React from 'react';
import { Media, Image, Col } from 'react-bootstrap';
import './style.css';
const work = (props) => {
  const { title, imageUrl, projectDescription, projectUrl } = props.workDetail;
  console.log(title, imageUrl, projectDescription, projectUrl);
  return (
    <>
      <Image src={imageUrl} thumbnail fluid />
    </>
  );
};

export default work;
// { title, imageUrl, projectDescription, projectUrl }
