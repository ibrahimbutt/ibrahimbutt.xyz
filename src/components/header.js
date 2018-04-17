import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";

const HeaderContainer = styled.header`
  padding: 50px;
  padding-bottom: 0;
  display: grid;
  grid-template-columns: min-content auto;
  @media (max-width: 960px) {
    padding: 25px;
    padding-bottom: 0;
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
  font-size: 14px;
  text-align: center;
  line-height: 14px;
  text-transform: lowercase;
  margin: 0;
  /* &:before,
  &:after {
    content: "\`";
    color: #bd10e0;
  } */
  a {
    color: #000;
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
    font-size: 14px;
    line-height: 14px;
    color: #999;
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
