module.exports = {
  siteMetadata: {
    title: "Ibrahim"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        precision: 8
      }
    },
    `gatsby-plugin-styled-components`
  ]
};
