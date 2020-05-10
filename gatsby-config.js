const contentful = require('contentful');
const manifestConfig = require('./manifest-config');
require('dotenv').config();

const { ACCESS_TOKEN, SPACE_ID, ANALYTICS_ID, DETERMINISTIC } = process.env;

const client = contentful.createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN,
});

const getAboutEntry = entry => entry.sys.contentType.sys.id === 'about';

const plugins = [
  'gatsby-plugin-react-helmet',
  {
    resolve: 'gatsby-plugin-web-font-loader',
    options: {
      google: {
        families: ['Cabin', 'Open Sans'],
      },
      name: 'Jide Abdul-Qudus Portfolio',
      short_name: 'Abdul-Qudus Portfolio',
      start_url: '/',
      icon: './public/icons/icon-192x192.png', // This path is relative to the root of the site.
    },
  },
  {
    resolve: 'gatsby-plugin-manifest',
    options: manifestConfig,
  },
  'gatsby-plugin-styled-components',
  {
    resolve: 'gatsby-source-contentful',
    options: {
      spaceId: SPACE_ID,
      accessToken: ACCESS_TOKEN,
    },
  },
  'gatsby-transformer-remark',
  'gatsby-plugin-offline',
];

module.exports = client.getEntries().then(entries => {
  const { mediumUser } = entries.items.find(getAboutEntry).fields;

  plugins.push({
    resolve: 'gatsby-source-medium',
    options: {
      username: mediumUser || '@medium',
    },
  });

  if (ANALYTICS_ID) {
    plugins.push({
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: ANALYTICS_ID,
      },
    });
  }

  return {
    siteMetadata: {
      title: 'Jide Abdul-Qudus Portfolio',
      author: 'Abdul-Qudus',
      isMediumUserDefined: !!mediumUser,
      deterministicBehaviour: !!DETERMINISTIC,
      description: 'Abdul-Qudus is a Web Designer & Programmer, with penchant for Software development & UI/UX development, lives in Lagos, Nigeria.',
      social: {
        twitter: '@jideabdqudus',
        github: 'olanetsoft',
        instagram: 'theqoder'
      },
      siteUrl: `https://abdulqudus.com/`,
      siteImage: `https://avatars0.githubusercontent.com/u/45945474?v=4`
    },
    plugins,
  };
});
