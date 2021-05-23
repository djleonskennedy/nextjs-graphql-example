import {
  Arg,
  FieldResolver,
  Query,
  Resolver,
  Root,
} from 'type-graphql';
import { Post } from '../entities/post';
import { Comment } from '../entities/comment';

// lets assume that here we have DB/ORM to some api service etc;
const JSON_PLACEHOLDER_URL = 'https://jsonplaceholder.typicode.com';

@Resolver(() => Post)
export class PostsResolver {
  @Query(() => [Post], { nullable: true })
  async posts(): Promise<Post[]> {
    const Posts = await fetch(`${JSON_PLACEHOLDER_URL}/posts`).then(
      (response) => response.json(),
    );

    return Promise.resolve(Posts);
  }

  @Query(() => Post)
  async post(@Arg('id') id: number): Promise<Post> {
    const Post = await fetch(
      `${JSON_PLACEHOLDER_URL}/posts/${id}`,
    ).then((response) => response.json());

    return Promise.resolve(Post);
  }

  @FieldResolver(() => [Comment])
  async comments(@Root() Post: Post): Promise<Comment[]> {
    const comments = await fetch(
      `${JSON_PLACEHOLDER_URL}/posts/${Post.id}/comments`,
    ).then((response) => response.json());

    return Promise.resolve(comments);
  }
}
