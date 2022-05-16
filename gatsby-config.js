let contentfulConfig

// Load the Contentful config from the .contentful.json
// eslint-disable-next-line global-require
contentfulConfig = require('./.contentful')

// Overwrite the Contentful config with environment variables if they exist
contentfulConfig = {
  spaceId:
    process.env.REACT_APP_CONTENTFUL_SPACE_ID || contentfulConfig.spaceId,
  accessToken:
    process.env.REACT_APP_CONTENTFUL_DELIVERY_TOKEN ||
    contentfulConfig.accessToken,
  environment:
    process.env.REACT_APP_CONTENTFUL_ENVIRONMENT ||
    contentfulConfig.environment,
}

// If you want to use the preview API please define
// CONTENTFUL_HOST and CONTENTFUL_PREVIEW_ACCESS_TOKEN in your
// environment config.
//
// CONTENTFUL_HOST should map to `preview.contentful.com`
// CONTENTFUL_PREVIEW_ACCESS_TOKEN should map to your
// Content Preview API token
//
// For more information around the Preview API check out the documentation at
// https://www.contentful.com/developers/docs/references/content-preview-api/#/reference/spaces/space/get-a-space/console/js
//
// To change back to the normal CDA, remove the CONTENTFUL_HOST variable from your environment.
if (process.env.CONTENTFUL_HOST) {
  contentfulConfig.host = process.env.CONTENTFUL_HOST
  contentfulConfig.accessToken = process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
}

const { spaceId, accessToken } = contentfulConfig

if (!spaceId || !accessToken) {
  throw new Error(
    'Contentful spaceId and the access token need to be provided.'
  )
}

module.exports = {
  siteMetadata: {
    title: 'Gatsby Contentful Starter',
    description: 'Official Contentful Gatsby Starter',
  },
  plugins: [
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    },
  ],
}
