import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
require("prismjs/themes/prism-tomorrow.css");


const Markdown = styled.div`
  max-width: 740px;
  margin: 0 auto;
  font-family: "Plex Sans";
  color: rgba(0, 0, 0, 0.84);
  
  h1 {
    font-size: 42px;
    font-weight: 600; 
    line-height: 1.25;
    margin-bottom: 10px;
  }
  h1 + h2 {
    color: #999999;
    /* color: #797C80; */
    font-weight: 500;
    margin-bottom: 50px;
  }
  h2 {
    font-size: 24px;
    font-weight: 500; 
    line-height: 1.25;
    margin-bottom: 15px;
  }
  h3 {
    font-size: 20px;
    font-weight: 500; 
    line-height: 1.25;
    margin-bottom: 15px;
  }
  p {
    font-weight: 400;
    line-height: 1.7;
    font-size: 18px;
    margin-bottom: 30px;
  }
  blockquote {
    padding-left: 30px;
    margin-left: -30px;
    border-left: 3px solid black;
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
    font-weight: 400;
    line-height: 1.7;
    font-size: 18px;
    margin-bottom: 30px;
    
  }
`;

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div>
      {/* <Link to="/archive">Back</Link> */}
      {/* <h1>{post.frontmatter.title}</h1> */}
      <Markdown dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
