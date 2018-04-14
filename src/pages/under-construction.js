import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  margin: 0 auto;
  max-width: 540px;
  height: 100vh;
  display: grid;
  align-content: center;
  grid-template-rows: repeat(3, min-content);
  @media (max-width: 540px) {
    padding: 0 20px;
  }
`;

const Title = styled.h1`
  font-family: "Plex Mono";
  font-weight: 500;
  font-size: 24px;
  text-transform: uppercase;
  margin: 0;
  &:before,
  &:after {
    content: "\`";
    color: #bd10e0;
  }
`;

const Text = styled.p`
  padding-top: 50px; /* 50 */
  padding-bottom: 40px;
  font-family: "Plex Sans";
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: min-content;
  max-width: 420px;
  width: 100%;
  grid-column-gap: 20px;
  margin: 0 auto;
  @media (max-width: 540px) {
    grid-template-columns: 1fr;
    grid-row-gap: 20px;
  }
`;

const Email = styled.input.attrs({
  type: "email"
})`
  background-color: #fdf9fe;
  border: 2px solid #663399;
  font-size: 16px; 
  padding: 9px 11px 7px 11px;
  text-transform: uppercase;
  font-family: "Plex Mono";
  font-weight: 500;
  line-height: 1;
  width: 100%;
  -webkit-appearance: none;
  border-radius: 0;
`;

const Submit = styled.button.attrs({
  type: "submit"
})`
  background-color: #fff;
  border: 2px solid #663399;
  text-transform: uppercase;
  font-family: "Plex Mono";
  font-weight: 500;
  font-size: 12px;
  line-height: 1;
  height: 40px;
  letter-spacing: 1px;
  padding: 14px 12px 10px 12px;
  @media (max-width: 540px) {
    justify-self: center;
  }
`;

const UnderConstruction = () => (
  <Container>
    <Title>ibrahim_</Title>
    <Text>
      My blog is under construction – if you came here from Medium, you can
      subscribe below.
    </Text>
    <Form
      className="form"
      action="https://formspree.io/ibrahimbutt1993@gmail.com"
      method="POST"
    >
      <Email type="email" name="_replyto" />
      <input type="hidden" name="_next" value="/under-construction/" />
      {/* <input type="text" name="_gotcha" style="display: none" /> */}
      <Submit type="submit" className="pageclip-form__submit">
        Subscribe
      </Submit>
    </Form>
  </Container>
);

export default UnderConstruction;
