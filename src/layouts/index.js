import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import "../sass/main.sass";

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: "description", content: "Ibrahim Butts Blog" },
        { name: "keywords", content: "javascript, programming, medium" }
      ]}
    />

    {children()}
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
