import React from "react";
import {createGlobalStyle} from "styled-components"

import PictureGrid from './PictureGrid'
import Contact from "./Contact";
import Navbar from './Navbar'
import Cta from './Cta'

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after{
    box-sizing: border-box;
  }
  body{
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
      
    </div>
  );
}

export default App;
