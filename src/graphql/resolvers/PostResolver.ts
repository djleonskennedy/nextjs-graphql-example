import {
  Arg,
  FieldResolver,
  Int,
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
  @Query(() => [Post])
  async posts(): Promise<Post[]> {
    return fetch(`${JSON_PLACEHOLDER_URL}/posts`).then((response) =>
      response.json(),
    );
  }

  @Query(() => Post, { nullable: true })
  async post(@Arg('id', () => Int) id: number) {
    return fetch(`${JSON_PLACEHOLDER_URL}/posts/${id}`).then(
      (response) => response.json(),
    );
  }

  @FieldResolver(() => [Comment])
  async comments(@Root() post: Post) {
    const comments = await fetch(
      `${JSON_PLACEHOLDER_URL}/posts/${post.id}/comments`,
    ).then((response) => response.json());

    return Promise.resolve(comments);
  }
}
