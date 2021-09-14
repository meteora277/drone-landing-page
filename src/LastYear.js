import React from 'react';
import styled from 'styled-components';

import PictureGrid from './PictureGrid';

const Section = styled.div`
    height: 52.6rem;
    padding: 8.9rem 10%;
    margin: 0;
    display:flex;

`
const Content = styled.div`
    margin-right: 2rem;
`

const Header = styled.header`
    font-size: 97px;
    width: 24.5rem;
    line-height: 91.6%;

`
const P = styled.p`
    width: 24.5rem;
    font-size: 24px;
    line-height: 141.6%;
`
const Image = styled.div`
    transform:translateY(-281px)
`

function LastYear(){

    return(
        <Section>
            <Content>
                <Header>last year’s footage</Header>
                <P>With over 5,000 participants, 2020 featured some of the most amazing drone races from the most competitive field ever seen. in 2021, we’re about to double the excitement with 10,000 race participants and 100,000 fans!</P>
            </Content>
            <Image>
                <PictureGrid/>
            </Image>
        </Section>

    )

}
export default LastYear