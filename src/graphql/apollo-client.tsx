/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { NextPage } from 'next';

const GRAPHQL_URL = 'http://localhost:3000/api/graphql';

const client = new ApolloClient({
  uri: GRAPHQL_URL,
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
    uri: GRAPHQL_URL,
    fetch,
  });
  const cache = new InMemoryCache().restore(initialState || {});
  return new ApolloClient({
    link: httpLink,
    cache,
  });
};

export { client, getApolloClient };
