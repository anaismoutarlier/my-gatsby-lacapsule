module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "My Gatsby Site",
    description: "Mon premier site Gatsby"
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: `${__dirname}/blog/`
      }
    },
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: 'g88s4od1lzmv',
        accessToken: "uXMhnuXR6kkYSZb-pCJx0eGL9LqidBMh4yet-KwjsZk"
      }
    },
    "gatsby-plugin-image"
  ]
};