import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import Header from "../components/header";



const Image = styled.img`
  width: 100%;
  border-radius: 4px;
  transition: opacity 0.25s ease;
`;

const Container = styled.div`
  max-width: 1340px;
  margin: 0 auto;
  padding: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 50px;
  @media (max-width: 960px) {
    grid-template-columns: 1fr 1fr;
    padding: 25px;
    grid-row-gap: 25px;
  }
  @media (max-width: 750px) {
    grid-template-columns: 1fr;
    padding: 25px;
    grid-row-gap: 25px;
  }
`;

const Title = styled.h2`
  font-family: "Plex Sans";
  font-weight: 400;
  font-size: 22px;
  line-height: 1.5;
  color: #000;
  padding: 20px 10px 10px 10px;
`;

const Text = styled.h2`
  font-family: "Plex Sans";
  font-weight: 400;
  font-size: 15px;
  line-height: 1.7;
  color: #797c80;
  padding: 0 10px;
`;

const Article = styled.div`
  :hover img {
    opacity: 0.5;
  }
`;

export default ({ data }) => {
  console.log(data);
  return (
    <div>
    <Header title={data.site.siteMetadata.title} />
    <Container>
      
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Article key={node.id}>
          <Link to={node.fields.slug}>
            <Image src={node.frontmatter.featuredImage.publicURL} />
            <Title>{node.frontmatter.title}</Title>
            <Text>{node.excerpt}</Text>
          </Link>
        </Article>
      ))}
    </Container>
    </div>
  );
};

export const query = graphql`

  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date
            featuredImage {
              publicURL
            }
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`;
