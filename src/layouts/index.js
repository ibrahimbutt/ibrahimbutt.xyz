import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import './index.sass';
import styled from 'styled-components';
import Header from '../components/header';
import Social from '../components/social';
import Subscribe from '../components/subscribe';

const Container = styled.div`
  max-width: 740px;
  margin: 0 auto;
`;
const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Ibrahim Butts Blog' },
        { name: 'keywords', content: 'javascript, programming, medium' }
      ]}
    />
    <Header title={data.site.siteMetadata.title} />
    {children()}
    <Subscribe />
    <Social />
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
