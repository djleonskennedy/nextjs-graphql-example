import { ApolloProvider } from '@apollo/client';
import React from 'react';
import { client } from '../graphql/apollo-client';

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />;
    </ApolloProvider>
  );
}

export default MyApp;
