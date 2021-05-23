import { gql } from '@apollo/client';
import { usePostsQuery } from '../graphql/api';

// eslint-disable-next-line no-unused-expressions
gql`
  query Posts {
    posts {
      id
      title
    }
  }
`;

export default function Posts() {
  const { data, loading, error } = usePostsQuery();
  if (loading) {
    return 'Loading...';
  }

  if (error) {
    return 'Error...';
  }
  return <pre>{JSON.stringify(data.posts, null, 2)}</pre>;
}
