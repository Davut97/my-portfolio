import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import NameReveal from './NameReveal';
import TitleReveal from './TitleReveal';
import FadeIn from 'react-animations/lib/fade-in-up';

const Container = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    background-color: white;
    /* border: 1px solid blue; */
`;

class NameAndJobTitle extends Component {
    render() {
        const FadeInAnimation = keyframes`${FadeIn}`;
        const FadeInDiv = styled.div`
            animation: 2s ${FadeInAnimation};
        `;
        return (
            <Container>
                <FadeInDiv>
                    <NameReveal text="Aydin Davutoglu" />
                    <br />
                    <TitleReveal text="Front-end Developer" />
                </FadeInDiv>
            </Container>
        );
    }
}

export default NameAndJobTitle;
