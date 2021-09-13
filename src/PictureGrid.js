import React from "react";
import styled from "styled-components";
import image_1 from "./assets/footage-1.jpg";
import image_2 from "./assets/footage-2.jpg";
import image_3 from "./assets/footage-3.jpg";
import image_4 from "./assets/footage-4.jpg";
import image_5 from "./assets/footage-5.jpg";

const Grid = styled.section`
  position: absolute;
  right: 0;
  ${(props) => props.size && `width: ${props.size};`}
  ${(props) => props.size && `height: ${props.size};`}
  display: grid;
  grid-template-columns: 33% 33% 33%;
  grid-template-row: auto;
  grid-template-areas:
    " . img1 img2 "
    " img3 img4 . "
    " . img5 . ";
`;

Grid.defaultProps = {
  size: "300px",
};

const Image = styled.div`
  width: 100%;
  height: 100%;

  ${(props) =>
    props.img1 &&
    `background: url(${image_1}) no-repeat center; grid-area: img1;`}
  ${(props) =>
    props.img2 &&
    `background: url(${image_2}) no-repeat center; grid-area: img2;`}
  ${(props) =>
    props.img3 &&
    `background: url(${image_3}) no-repeat center; grid-area: img3;`}
  ${(props) =>
    props.img4 &&
    `background: url(${image_4}) no-repeat center; grid-area: img4;`}
  ${(props) =>
    props.img5 &&
    `background: url(${image_5}) no-repeat right; grid-area: img5;`}

  background-size: cover;
`;

Image.defaultProps = {};

function PictureGrid() {
  return (
    <Grid>
      <Image img1></Image>
      <Image img2></Image>
      <Image img3></Image>
      <Image img4></Image>
      <Image img5></Image>
    </Grid>
  );
}
export default PictureGrid;
