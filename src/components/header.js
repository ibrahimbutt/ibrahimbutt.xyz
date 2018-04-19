import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";

const HeaderContainer = styled.header`
  padding: 2.777rem;
  padding-bottom: 0;
  display: grid;
  grid-template-columns: min-content auto;
  @media (max-width: 960px) {
    padding: 1.388rem;
    padding-bottom: 0;
  }
  @media (max-width: 400px) {
    grid-template-columns: 1fr;
    grid-row-gap: 1.111rem;
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
    color: #000;
  }
`;

const Nav = styled.nav`
  display: grid;
  grid-template-columns: min-content min-content min-content;
  justify-self: right;
  grid-column-gap: 1.111rem;
  text-align: right;
  a {
    font-family: "Plex Sans";
    font-weight: 500;
    font-size: 0.777rem;
    line-height: 0.777rem;
    color: #797C80;
    text-transform: lowercase;
    transition: color 0.5s ease;
  }
  a:hover {
    color: #000;
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
      <Link to="/archive">Archive</Link>
      <Link to="/">About</Link>
      <Link to="/">Contact</Link>
    </Nav>
  </HeaderContainer>
);

export default Header;
