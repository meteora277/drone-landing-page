import React from "react";
import styled from "styled-components";

const StyledContact = styled.section`
  background: #b2dd9e;
  width: 100%;
  height: 46rem;
`;
const Header = styled.header``;

function Contact(props) {
  return (
    <StyledContact>
      <Header>{props.header}</Header>
      <form>
        <label htmlFor="nameInput">Name</label>
        <input id="nameInput" type="text" name="name" />
        <label htmlFor="emailInput">Email</label>
        <input
          id="emailInput"
          pattern=".+@globex\.com"
          type="email"
          name="email"
        />
        <button>{props.button}</button>
      </form>
      <section>
        <p>{props.phone}</p>
        <p>{props.email}</p>
      </section>
    </StyledContact>
  );
}

Contact.defaultProps = {
  header: "register for the event!",
  button: "register now!",
  phone: "1-555-555-3298",
  email: "some@email.com",
};

export default Contact;
