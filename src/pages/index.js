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
  margin: 0 auto;
  padding: 0 20px 50px 20px;
`;

const Article = styled.div`
  a {
    transition: opacity 0.5s ease;
  } 
  a:hover {
    opacity: .65;
  }
`;

const Title = styled.h2`
  font-family: "Plex Sans";
  font-weight: 400;
  font-size: 1.222rem;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.84);
  padding-bottom: 0.555rem;
  display: inline-block;
`;

const Text = styled.h2`
  font-family: "Plex Sans";
  font-weight: 400;
  font-size: 0.833rem;
  line-height: 1.7;
  color: #797c80;
  margin-bottom: 1.666rem;
`;

export default ({ data }) => {
  console.log(data);
  return (
    <div>
      <Container>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Article key={node.id}>
            <Link to={node.fields.slug}>
              {/* <Image src={node.frontmatter.featuredImage.publicURL}/> */}
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
            date(formatString: "MMM D, Y")
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
