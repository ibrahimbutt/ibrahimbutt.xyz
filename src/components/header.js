import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";

const HeaderContainer = styled.header`
  padding: 50px;
  display: grid;
  grid-template-columns: min-content auto;
  @media (max-width: 700px) {
    padding: 50px 20px;
    max-width: 640px;
    margin: 0 auto;
  }
  @media (max-width: 400px) {
    grid-template-columns: 1fr;
    grid-row-gap: 20px;
    justify-content: center;
  }
`;
const Title = styled.h1`
  font-family: "Plex Sans";
  font-weight: 500;
  font-size: 0.777rem;
  text-align: center;
  line-height: 0.777rem;
  text-transform: lowercase;
  margin: 0;
  a {
    color: rgba(0, 0, 0, 0.84);
  }
`;

const Nav = styled.nav`
  display: grid;
  grid-template-columns: min-content min-content min-content;
  justify-self: right;
  grid-column-gap: 20px;
  text-align: right;
  a {
    font-family: "Plex Sans";
    font-weight: 500;
    font-size: 0.777rem;
    line-height: 0.777rem;
    color: #797c80;
    text-transform: lowercase;
    transition: color 0.5s ease;
  }
  a:hover {
    color: rgba(0, 0, 0, 0.84);
  }

  @media (max-width: 400px) {
    justify-self: center;
  }
`;

const Header = ({ title }) => (
  <HeaderContainer>
    <Title>
      <Link to="/">{title}</Link>
    </Title>
    <Nav>
      {}
      <Link to="/">Home</Link>
      {/* <Link to="/">About</Link> */}
      <a href="mailto:hey@ibrahimbutt.xyz">Contact</a>
    </Nav>
  </HeaderContainer>
);

export default Header;
