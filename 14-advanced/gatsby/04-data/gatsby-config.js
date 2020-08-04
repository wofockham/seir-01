module.exports = {
  siteMetadata: {
    title: 'Dull Site About Dull Things'
  },
  plugins: [
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography'
      }
    }
  ],
};
