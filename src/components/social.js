import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font-family: 'Plex Sans';
  text-align: center;
  margin-bottom: 50px;
  font-size: 14px;
  a {
    color: #797c80;
    transition: color 0.5s ease;
  }
  a:not(:last-of-type) {
    margin-right: 20px;
  }
  a:hover {
    color: rgba(0, 0, 0, 0.84);
  }
`;
const Social = ({ title }) => (
  <Container>
    <a href="https://medium.com/@ibrahimbutt" target="_blank">
      medium
    </a>
    <a href="https://www.github.com/ibrahimbutt" target="_blank">
      github
    </a>
  </Container>
);

export default Social;
