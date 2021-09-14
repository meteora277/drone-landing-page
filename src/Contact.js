import React from "react";
import styled from "styled-components";

const StyledContact = styled.section`
  background: #b2dd9e;
  width: 100%;
  height: 46rem;
`;

const Section = styled.section`
  display: flex;
`;
const Header = styled.header`
  padding-left: 10%;
  padding-right: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 64px;
  white-space: nowrap;
  line-height: 91.6%;
  max-width: 43rem;
  height: 8.3rem;
  background: rgba(159, 200, 140, 1);
`;

const StyledForm = styled.form`
  padding-left: 10%;
  display: flex;
  flex-direction: column;
  
`;

const Input = styled.input`
  width:40.5rem;
  height: 4.5rem;
  font-size: 1.8rem;
  font-family: Bebas Neue;
`
const Button = styled.button`
  width:40.5rem;
  font-family: Bebas Neue;
  background: black;
  color: white;
  border:none;
  height: 5.8rem;
  margin-top: 3.6rem;
  font-size: 35px;
  line-height: 91.6%;
`
const Label = styled.label`
  font-size: 32px;
  line-height: 91.6%;
  margin-top:3.6rem;
`
const Line = styled.hr`
  border: 1px solid rgba(0, 0, 0, 0.2);
  width:24rem;
`
const PhoneEmail = styled.div`
  padding-left: 6.75rem;
  padding-top: 5.4rem;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 91.6%;
`

function Contact(props) {
  return (
    <StyledContact>
      <Header>{props.header}</Header>
      <Section>
        <StyledForm>
          <Label htmlFor="nameInput">Name</Label>
          <Input id="nameInput" type="text" name="name" />
          <Label htmlFor="emailInput">Email</Label>
          <Input
            id="emailInput"
            pattern=".+@globex\.com"
            type="email"
            name="email"
          />
          <Button>{props.button}</Button>
        </StyledForm>
        <PhoneEmail>
          <p>{props.phone}</p>
          <Line/>
          <p>{props.email}</p>
          <Line/>
        </PhoneEmail>
      </Section>
    </StyledContact>
  );
}

Contact.defaultProps = {
  header: "register for the event!",
  button: "register now!",
  phone: "1-555-555-3298",
  email: "some@email.com"
};

export default Contact;
