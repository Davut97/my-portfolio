import React from 'react';
import '../../Assets/style/style.css';
import './style.css';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Typed from 'react-typed';
import 'react-typed/dist/animatedCursor.css';
import FadeInLeft from 'react-animations/lib/fade-in-left';
import FadeInRight from 'react-animations/lib/fade-in-right';
import styled, { keyframes } from 'styled-components';
import { AnimatedOnScroll } from 'react-animated-css-onscroll';

const About = () => {
    const FadeInLeftAnimation = keyframes`${FadeInLeft}`;
    const FadeInLeftDiv = styled.div`
        animation: 2s ${FadeInLeftAnimation};
    `;

    const FadeInRightAnimation = keyframes`${FadeInRight}`;
    const FadeInRightDiv = styled.div`
        animation: 2s ${FadeInRightAnimation};
    `;
    return (
        <section className="half-black-half-white " id="about">
            <AnimatedOnScroll animationIn="fadeInDown">
                <h5 className="header">About</h5>
                <div class="header-bar"></div>
            </AnimatedOnScroll>
            <Container fluid>
                <Row
                    style={{
                        paddingTop: '50px',
                        fontSize: '22px',
                        color: '#ababab',
                    }}
                >
                    <Col md style={{ paddingTop: '100px', lineHeight: '20px' }}>
                        <AnimatedOnScroll animationIn="bounceInLeft">
                            {' '}
                            <h6 style={{ fontSize: '22px', color: 'white' }}>
                                Who's this guy?
                            </h6>
                            <p>
                                I'm a Front-End Developer Living In Istanbul,
                                Turkey.
                                <br></br>I have serious passion for UI effects
                                and animations.<br></br>I love to Create{' '}
                                <Typed
                                    className="strongy"
                                    strings={['Fast', 'Responsive', 'Dynamic']}
                                    typeSpeed={50}
                                    backSpeed={50}
                                    loop
                                />{' '}
                                <br></br> Websites With Great User experiences.
                            </p>
                        </AnimatedOnScroll>
                    </Col>
                    <Col xs={9} md={5}>
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
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;
