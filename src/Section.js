import React from 'react';
import styled, { css } from 'styled-components';

import stadium from './assets/stadium.jpg'

const StyledSection = styled.section`
    position:relative;
    display:grid;
    grid-template-columns : 
    20% 80%;
    grid-template-areas:
    ". left";
    height: 740px;
`

const Background = styled.div`
    ${props => props.overlay && css`
    position: absolute;
    grid-area:left;
    top:0;
    bottom:0;
    left: 0;
    right:0;
    background-color: rgba(48, 56, 83, 0.8);
    `}
    ${props => props.image && css`
    grid-area: left;
    background-image: url(${stadium});
    background-size:cover;

    `}    
`
const Content = styled.p`

    grid-area:left;
    position:relative;
    margin: 0 11.75rem;
    z-index: 10;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;

    
`
const P = styled.p`
    color:white;
    font-size: 54px;
    line-height: 99.6%; 
    
    ${props => props.left && css`
    font-size: 25px;
    line-height: 99.6%;
    &::before{content: "-"}
    `}
`

function Section(){

    return(
        <StyledSection>
            <Background image>
                <Background overlay/>
                <Content>
                <P>“the stadium is simply unreal. scrimba hall will make this the best drone racing event ever, period.”</P>
                <P left>anonymous guy</P>
                </Content>
            </Background>
        </StyledSection>
    )

}

export default Section