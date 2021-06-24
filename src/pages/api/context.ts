export interface GraphQLClientContext {
  getCacheKey: (options: {
    __typename: string;
    id: string;
  }) => string;
}
