import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import Header from '../components/header';
import styled from 'styled-components';
import 'prismjs/themes/prism.css';

const Container = styled.div`
  max-width: 740px;
  margin: 0 auto;
  padding: 0 20px 50px 20px;
  color: rgba(0, 0, 0, 0.84);
`;

const Title = styled.div`
  margin-bottom: 0.833rem;
  font-family: 'Plex Sans';
  font-size: 2.369rem;
  font-weight: 600;
  line-height: 1.25;
`;

const Date = styled.p`
  margin-bottom: 2.777rem;
  color: #797c80;
  font-family: 'Plex Sans';
  font-size: 0.777rem;
`;

const Markdown = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: 0.833rem;
    font-family: "Plex Sans";
    font-weight: 600;
    line-height: 1.25;
  }

  h1 {
    font-size: 2.369rem;
  }

  h2 {
    font-size: 1.777rem;
  }

  h3 {
    font-size: 1.333rem;
  }

  h4 {
    font-size: 1rem;
  }
  h5 {
    font-size: 1rem;
    font-weight: 500;
  
  }

  p {
    font-family: "Plex Serif";
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.7;
    margin-bottom: 1.666rem;
  }

  img {
    width: 100%;
    border-radius: 4px;

  }

  strong {
    font-family: "Plex Serif";
    font-weight: 500;
  }
  em {
    font-style: italic;
  }

  blockquote {
    padding: 1.166rem 2.777rem;
    border-left: 2px solid #e8e8e8;
    font-family: "Plex Sans";
    font-weight: 300;
    font-size: 1.166rem;
    margin-bottom: 30px;
  }

  blockquote p {
    font-family: "Plex Sans";
    font-weight: 300;    
  }
  blockquote p:last-child {
    margin-bottom: 0;
  }

  .gatsby-highlight {
    font-family: "Plex Mono";
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    margin-bottom: 1.666rem;
    
  }
  
  code {
    font-size: 14px;
    white-space: pre-wrap !important;
  }
  pre[class*="language-"] {
    border-radius: 4px;
  }

  hr {
    display: block;
    width: 100px;
    border: 0;
    border-top: 2px solid #e8e8e8;
    margin: 50px auto 70px auto;
    padding: 0;
  }

  ol, ul {
    padding-left: 26px;
    line-height: 1.7;
    font-size: 1rem;
    margin-bottom: 1.666rem;
    width: 100%;
  }

  ul {
    list-style: none:
  }
  
  li {
    font-family: "Plex Serif";
    margin-bottom: 1rem;    
  }

  ol li:not(:last-of-type),
  ul li:not(:last-of-type)
   {
    /* margin-bottom: 0.833rem; */
  }

  .task-list-item {
    list-style: none;
  }

  .gatsby-resp-image-image,
  .gatsby-resp-image-background-image {
    border-radius: 4px;
    margin-bottom: 2.777rem;
  }
  table, th, td  {
    color: rgba(0, 0, 0, 0.84);
    font-family: "Plex Sans";
    border: 1px solid #e8e8e8;
    border-collapse: collapse;
    border-spacing: 0;
    text-align: left;
    padding: 14px 12px 10px 12px;
    font-size: 0.833rem;
    
  }
  table {
    width: 100%;
    margin-bottom: 1.666rem;
    
  }
  th {
    font-weight: 600;
  }
  tr {
    font-weight: 400;
  }

  tr:nth-child(even) {
    background-color: #fafafa;
  }
  a:not(.gatsby-resp-image-link) {
    font-size: 1rem;
    color: rgba(0, 0, 0, 0.84);
    box-shadow: inset 0 -2px 0px 0px lightblue;
    transition: all .25s ease;
  }
  a:not(.gatsby-resp-image-link):hover {
    box-shadow: inset 0 -1rem 0px 0px lightblue;
  }
`;

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Container>
      <Helmet
        title={`${post.frontmatter.title} | ${data.site.siteMetadata.title}`}
      />
      <Title>{post.frontmatter.title}</Title>
      <Date>{post.frontmatter.date}</Date>
      <Markdown dangerouslySetInnerHTML={{ __html: post.html }} />
    </Container>
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
        date(formatString: "MMMM Do, YYYY")
      }
    }
  }
`;
