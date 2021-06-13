# Next js app with graphql api route

Apollo server micro with type-graphql

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

## Generate hooks and component for `GraphQL` api calls

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

When app is up

```bash
npm run schema:generate
# or
yarn schema:generate
```

To generate `/src/graphql/api.tsx` for client side and `/src/graphql/api-ssr.tsx` for server side

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
