import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import Header from "../components/header";
import styled from "styled-components";
import "prismjs/themes/prism.css";

const Container = styled.div`
  margin: 0 auto;
  padding: 0 20px 50px 20px;
  max-width: 740px;  
  color: rgba(0, 0, 0, 0.84);
`;

const Title = styled.div`
  font-family: "Plex Sans";
  font-size: 2.369rem;
  font-weight: 600;
  line-height: 1.25;
  margin-bottom: 0.833rem;
`;

const Date = styled.p`
  font-family: "Plex Sans";
  font-size: 0.777rem;
  color: #797c80;
  margin-bottom: 2.777rem;
`;

const Markdown = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Plex Sans";
    font-weight: 600;
    line-height: 1.25;
    margin-bottom: 0.833rem;
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

  p {
    font-family: "Plex Serif";
    font-weight: 400;
    line-height: 1.7;
    font-size: 1rem;
    margin-bottom: 1.666rem;
  }

  strong {
    font-family: "Plex Serif";
    font-weight: 500;
  }
  em {
    font-style: italic;
  }

  blockquote p {
    padding: 1.166rem 2.777rem;
    border-left: 2px solid #e8e8e8;
    font-family: "Plex Sans";
    font-weight: 300;
    font-size: 1.166rem;
  }
  .gatsby-highlight {
    font-family: "Plex Mono"
    font-weight: 400;
    font-size: 0.777rem;
    line-height: 0.777rem;
  }

  hr {
    display: block;
    width: 50px;
    border: 0;
    border-top: 2px solid #e8e8e8;
    margin: 50px auto 70px auto;
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
