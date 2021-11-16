import { withApollo } from '../graphql/apollo-client';
import { PagePostsComp, ssrPosts } from '../graphql/api-ssr';

const PostsServersidePage: PagePostsComp = () => {
  const { data } = ssrPosts.usePage();
  return (
    <div>
      {data?.posts?.map((post, k) => (
        <div key={k}>{post.title}</div>
      ))}
    </div>
  );
};

export const getServerSideProps = async () =>
  ssrPosts.getServerPage({});

export default withApollo(PostsServersidePage);
