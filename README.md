# Next js app with graphql api route

Apollo server micro with type-graphql

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

## Generated hooks and components for `GraphQL` api calls

for example query:

```ts
gql`
  query Posts {
    posts {
      id
      title
    }
  }
`;
```

will produce hook `const { data, loading, error } = usePostsQuery();`

`yarn build` of `yarn dev` will generate `/src/graphql/api.tsx` for client side and `/src/graphql/api-ssr.tsx` for server side automatically

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
