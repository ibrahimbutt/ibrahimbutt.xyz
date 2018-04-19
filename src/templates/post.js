import React from "react";
import Link from "gatsby-link";
import Header from "../components/header"
import styled from "styled-components";
import "prismjs/themes/prism-tomorrow.css";

const Markdown = styled.div`
  max-width: 740px;
  margin: 2.777rem auto;
  color: rgba(0, 0, 0, 0.84);
  @media (max-width: 740px) {
    padding: 1.388rem;
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: "Plex Sans";
    font-weight: 500;
    line-height: 1.25;    
    margin-bottom: 0.833rem;
  }
  
  h1 {
    font-size: 2.369rem;
    font-weight: 600; 
  }

  h2 {
    font-size: 1.777rem;
  }

  h3 {
    font-size: 1.333rem;
  }

  h1:not(:first-of-type) {
    font-size: 2.369rem;
  }

  h1:first-of-type + h2 {
    color: #797C80;
    margin-bottom: 2.777rem;
    font-weight: 400;
  }

  p {
    font-family: "Plex Serif";
    font-weight: 400;
    line-height: 1.7;
    font-size: 1rem;
    margin-bottom: 1.666rem;
  }

  p:nth-of-type(2)::first-letter {
    float: left;
    padding-right: 10px;
    padding-top: 6px;
    font-size: 3.63rem;
  }

  blockquote p {
    padding: 1.944rem;
    border-left: 2px solid #e8e8e8;
    font-family: "Plex Sans";
    font-weight: 300;
    font-size: 1.166rem;
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
    font-size: 1rem;
    margin-bottom: 1.666rem;
  }

  ol li:not(:last-of-type) {
    margin-bottom: 0.833rem;
  }

  .gatsby-resp-image-image,
  .gatsby-resp-image-background-image {
    border-radius: 4px;
    margin-bottom: 2.777rem;
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
