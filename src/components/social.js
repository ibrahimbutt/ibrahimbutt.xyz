import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";

const Container = styled.div`
  font-family: "Plex Sans";
  text-align: center;
  margin-bottom: 50px;
  font-size: 0.777rem;
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
    <Link to="www.github.com/ibrahimbutt">github</Link>
    <Link to="www.twitter.com/ibrahimbutt93">twitter</Link>
    <Link to="www.twitter.com">rss</Link>
  </Container>
);

export default Social;
