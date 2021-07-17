import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

const ENV = {
  GRAPHQL_URL: publicRuntimeConfig.siteUrl + '/api/graphql',
};

export { ENV };
