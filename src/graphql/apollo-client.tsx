/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { NextPage } from 'next';
import { ENV } from '../config';

const client = new ApolloClient({
  uri: ENV.GRAPHQL_URL,
  cache: new InMemoryCache(),
});

export const withApollo = (Comp: NextPage) => (props: any) =>
  (
    <ApolloProvider client={getApolloClient(null, props.apolloState)}>
      <Comp />
    </ApolloProvider>
  );

const getApolloClient = (
  ctx?: any,
  initialState?: NormalizedCacheObject,
) => {
  const httpLink = createHttpLink({
    uri: ENV.GRAPHQL_URL,
    fetch,
  });
  const cache = new InMemoryCache().restore(initialState || {});
  return new ApolloClient({
    link: httpLink,
    cache,
  });
};

export { client, getApolloClient };
