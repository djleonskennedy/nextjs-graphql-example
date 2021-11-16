import { gql } from '@apollo/client';
import React from 'react';
import Card from '../components/Card';
import { usePostsQuery } from '../graphql/api';

// eslint-disable-next-line no-unused-expressions
gql`
  query Posts {
    posts {
      id
      title
      body
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

  return data?.posts.map((post) => (
    <Card key={post.id} post={post} />
  ));
}
