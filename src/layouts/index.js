import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Header from "../components/header";
import "../sass/main.sass";
import styled from "styled-components";

const Container = styled.div`
  max-width: 740px;
  margin: 0 auto;
`;
const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: "description", content: "Ibrahim Butts Blog" },
        { name: "keywords", content: "javascript, programming, medium" }
      ]}
    />
    {!window.location.href.match(/\d\/$/g) && (
      <Header title={data.site.siteMetadata.title} />
    )}
    {console.log(window.location.href)}
    <Container>{children()}</Container>
  </div>
);

Layout.propTypes = {
  children: PropTypes.func
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
