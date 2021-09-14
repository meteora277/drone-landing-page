import React from "react";
import styled from "styled-components";
import Drone from "./assets/drone.png";
import Shadow from "./assets/blur.png";

const StyledBg = styled.div`
  max-width:1440px;
  display: grid;
  position: absolute;
  z-index: -10;
  width: 100%;
  height: 854px;
  grid-template-columns: 20% 45% 35%;
`;
const BgImage = styled.div`
  ${props => props.white && "background:white;"} ${props =>
      props.green && "background:#B2DD9E;"} ${props =>
      props.purple && "background:#7988BE;"};
`;

const CtaContent = styled.div`
  height: 854px;
  padding: 15rem 10%;
  display: flex;
  justify-content: space-between;
`;
const CtaHeader = styled.div`
  font-size: 97px;
  line-height: 91.6%;
`;
const CtaDescription = styled.div`
  font-family: Montserrat;
  font-size: 24px;
  line-height: 141.6%;
`;
const CtaText = styled.div`
  width: 400px;
  height: 100%;
`;
const DroneImg = styled.div`
  background: url(${Drone}) no-repeat center;
  position: relative;
  bottom: 3rem;
  width: 30.25rem;
  height: 22.6rem;
  background-size: contain;
  margin-right: 15%;
  z-index: 0;
  margin-left:1rem;

  ${props =>
    props.shadow &&
    `position: absolute;
     top: 240px;
     opacity: 20%;
     z-index: -9;
     background: url(${Shadow}) no-repeat center;
     background-size: contain;`
    };
`;
function Cta() {
  return (
    <div>
      <StyledBg>
        <BgImage white />
        <BgImage green />
        <BgImage purple />
      </StyledBg>

      <CtaContent>
        <CtaText>
          <CtaHeader>DRONE RACING GONE WILD</CtaHeader>
          <CtaDescription>
            Register now for the ultimate drone racing event. 5 mile courses and
            over $10 million in prize money!
          </CtaDescription>
        </CtaText>
        <div>
          <DroneImg />
          <DroneImg shadow />
        </div>
      </CtaContent>
    </div>
  );
}
export default Cta;
