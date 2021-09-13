import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  font-weight: normal;
  font-size: 24px;
  line-height: 91.6%;
  color:white;
  list-style-type:none;
  display:flex;
  position:absolute;
  width: 80%;
  justify-content: space-between;  
  margin-right: 10%;
  margin-left: 10%;

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
