import React from "react";
import styled from "styled-components";
import Drone from "./assets/drone.png";

const StyledCta = styled.div`
  display: grid;
  position: absolute;
  z-index: -10;
  width: 100%;
  height: 854px;
  grid-template-columns: 20% 45% 35%;
`;
const BgImage = styled.div`
  ${(props) => props.white && "background:white;"}
  ${(props) => props.green && "background:#B2DD9E;"}
    ${(props) => props.purple && "background:#7988BE;"}
`;

const CtaHeader = styled.div`
  font-size: 97px;
  line-height: 91.6%;
 
`;
const CtaDescription = styled.div`
  font-size: 24px;
  line-height: 141.6%;
  
`;
const CtaText = styled.div`
    width:400px;
    height:100%;
`
const CtaContent = styled.div`
    height: 854px;
    padding: 10%;
    display:flex;

`;
function Cta() {
  return (
    <div>
      <StyledCta>
        <BgImage white></BgImage>
        <BgImage green></BgImage>
        <BgImage purple></BgImage>
      </StyledCta>
      <CtaContent>
        <CtaText>
          <CtaHeader>DRONE RACING GONE WILD</CtaHeader>
          <CtaDescription>
            Register now for the ultimate drone racing event. 5 mile courses and
            over $10 million in prize money!
          </CtaDescription>
        </CtaText>

      </CtaContent>
    </div>
  );
}
export default Cta;
