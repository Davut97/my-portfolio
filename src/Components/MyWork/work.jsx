import React from 'react';
import { Image } from 'react-bootstrap';
import './style.css';

const work = (props) => {
  const { imageUrl } = props.workDetail;
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <>
      <Image src={imageUrl} thumbnail fluid />
    </>
  );
};

export default work;
// { title, imageUrl, projectDescription, projectUrl }
