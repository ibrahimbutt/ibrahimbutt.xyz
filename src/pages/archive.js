import React from "react";
import Link from "gatsby-link";

export default ({ data }) => {
  console.log(data);
  return (
    <div>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link to={node.fields.slug}>
            <h2>{node.frontmatter.title}</h2>
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
