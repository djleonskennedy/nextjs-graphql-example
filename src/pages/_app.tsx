import { ApolloProvider } from '@apollo/client';
import { AppProps } from 'next/dist/shared/lib/router/router';
import React from 'react';
import { client } from '../graphql/apollo-client';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />;
    </ApolloProvider>
  );
}
