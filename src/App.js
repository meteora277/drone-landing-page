import React from "react";
import {createGlobalStyle} from "styled-components"

import PictureGrid from './PictureGrid'
import Contact from "./Contact";
import Navbar from './Navbar'
import Cta from './Cta'
import Section from "./Section";
import LastYear from "./LastYear";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after{
    box-sizing: border-box;
  }
  html{
    display:flex;
    justify-content:center;
  }
  body{
    max-width: 1440px;
    font-family: 'Bebas Neue', cursive;
    margin:0;
    padding:0;
  }
`

function App() {
  return (
    
    <div>
      <GlobalStyle/>
      <Navbar/>
      <Cta/>
      <Section/>
      <LastYear/>
      <Contact/>
    </div>
  );
}

export default App;
