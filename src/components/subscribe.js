import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font-family: 'Plex Sans';
  text-align: center;
  margin-bottom: 50px;
  font-size: 0.777rem;
  padding: 0 20px;
  a {
    color: #797c80;
    transition: color 0.5s ease;
  }
  a:not(:last-of-type) {
    margin-right: 20px;
  }
  a:hover {
    color: rgba(0, 0, 0, 0.84);
    cursor: pointer;
  }
`;

const Text = styled.a`
  padding-bottom: 30px;
  font-family: 'Plex Sans';
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5;
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
  type: 'email'
})`
  background-color: #fafafa;
  border: 2px solid black;
  border-radius: 4px;
  font-family: 'Plex Sans';
  font-weight: 500;
  font-size: 1rem;
  line-height: 0.777rem;
  padding: 12px;
  text-transform: lowercase;
  font-family: 'Plex Sans';
  font-weight: 500;
  line-height: 1;
  width: 100%;
  height: 40px;

  -webkit-appearance: none;
  border-radius: 0;
`;

const Submit = styled.button.attrs({
  type: 'submit'
})`
  background-color: #fff;
  border: 2px solid black;
  text-transform: lowercase;
  font-family: 'Plex Sans';
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  height: 40px;
  letter-spacing: 1px;
  padding: 12px;
  cursor: pointer;
  @media (max-width: 540px) {
    justify-self: center;
  }
`;

// const Subscribe = ({ title }) => (
//   <Container>
//     <Text>subscribe to be notified of new posts – zero spam</Text>
//     <Form
//       name="subscribe-list"
//       method="POST"
//       data-netlify="true"
//       data-netlify-honeypot="bot-field"
//     >
//       <Email type="email" name="email" />
//       <Submit type="submit">Subscribe</Submit>
//     </Form>
//   </Container>
// );

const Subscribe = ({ title }) => (
  <Container>
    <Text href="http://eepurl.com/dtdbST">
      subscribe to be notified of new posts – zero spam
    </Text>
  </Container>
);

export default Subscribe;
