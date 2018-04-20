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
  max-width: 640px;
  margin: 50px auto;
  padding: 0 20px;
  @media (max-width: 640px) {
    padding: 1.388rem;
    margin: 0;
  }
  /* padding: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 50px; */
  /* @media (max-width: 960px) {
    grid-template-columns: 1fr 1fr;
    padding: 25px;
    grid-row-gap: 25px;
  }
  @media (max-width: 740px) {
    grid-template-columns: 1fr;
    padding: 25px;
    grid-row-gap: 25px;
  } */
`;

const Title = styled.h2`
  font-family: "Plex Sans";
  font-weight: 400;
  font-size: 22px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.84);
  margin: 30px 0 10px 0;
`;

const Text = styled.h2`
  font-family: "Plex Sans";
  font-weight: 400;
  font-size: 15px;
  line-height: 1.7;
  color: #797c80;
`;

export default ({ data }) => {
  console.log(data);
  return (
    <div>
      <Header title={data.site.siteMetadata.title} />
      <Container>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={node.fields.slug}>
              {/* <Image src={node.frontmatter.featuredImage.publicURL}/> */}
              <Title>{node.frontmatter.title}</Title>
              <Text>{node.excerpt}</Text>
            </Link>
          </div>
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
            date(formatString: "MMMM Do, YYYY")
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
