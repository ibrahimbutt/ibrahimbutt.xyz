import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";

const Image = styled.img`
  width: 300px;
  border-radius: 4px;
`;

export default ({ data }) => {
  console.log(data);
  return (
    <div>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link to={node.fields.slug}>
            <Image src={node.frontmatter.featuredImage.publicURL} />
            <h2>{node.frontmatter.title}</h2>
            <p>{node.frontmatter.excerpt}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export const query = graphql`
  query IndexQuery {
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
