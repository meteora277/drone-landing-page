import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  
  font-weight: normal;
  width:100%;
  max-width:1440px;
  padding-left: clamp(0%, 10%, 143px);
  padding-right: 10%;
  font-size: 24px;
  line-height: 91.6%;

  color:white;
  list-style-type:none;
  display:flex;
  position:absolute;
  justify-content: space-between;  

`;

const LinkContainer = styled.div`
  display:flex;

`

const NavItem = styled.li`
  padding: 1.5rem 1rem;
  text-transform: uppercase;
  ${props => props.logo && "background:black; width: 12.5rem; text-align:center; font-size: 36px;"}

`
const Span = styled.span`
  color:#6889FF;
`

function Navbar() {
  return (
    <Nav>
      <NavItem logo><Span>drone</Span>.series</NavItem>
        <LinkContainer>
          <NavItem>home</NavItem>
          <NavItem>races</NavItem>
          <NavItem>register</NavItem>
          <NavItem>faq</NavItem>
          <NavItem>contact</NavItem>
        </LinkContainer>
    </Nav>
  );
}
export default Navbar;
