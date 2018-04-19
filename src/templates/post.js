import React from "react";
import Link from "gatsby-link";
import Header from "../components/header"
import styled from "styled-components";
import "prismjs/themes/prism-tomorrow.css";

const Markdown = styled.div`
  max-width: 740px;
  margin: 50px auto;
  color: rgba(0, 0, 0, 0.84);

  h1, h2, h3, h4, h5, h6 {
    font-family: "Plex Sans";
    font-weight: 500;
    line-height: 1.25;    
    margin-bottom: 15px;
  }
  
  h1 {
    font-size: 42px;
    font-weight: 600; 
  }
  h1 + h2 {
    color: #797C80;
    margin-bottom: 50px;
    font-weight: 400;

  }
  h2 {
    font-size: 24px;
  }
  h3 {
    font-size: 20px;
  }
  p {
    font-family: "Plex Serif";
    font-weight: 400;
    line-height: 1.7;
    font-size: 18px;
    margin-bottom: 30px;
  }

  blockquote p {
    padding: 35px;
    border-left: 2px solid #e8e8e8;
    font-family: "Plex Sans";
    font-weight: 300;
    font-size: 21px;
  }
  hr {
    display: block;
    width: 50px;
    border: 0;
    border-top: 2px solid #e8e8e8;
    margin: 1em auto;
    padding: 0; 
  }
  ol {
    list-style-position: inside;
    line-height: 1.7;
    font-size: 18px;
    margin-bottom: 30px;
  }

  ol li:not(:last-of-type) {
    margin-bottom: 15px;
  }

  .gatsby-resp-image-image,
  .gatsby-resp-image-background-image {
    border-radius: 4px;
    margin-bottom: 50px;
  }
`;

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div>
      <Header title={data.site.siteMetadata.title} />
      <Markdown dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
