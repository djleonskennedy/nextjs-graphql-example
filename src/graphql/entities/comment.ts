import { Field, ID, Int, ObjectType } from 'type-graphql';

@ObjectType({ description: 'User comment about post' })
export class Comment {
  @Field(() => ID)
  postId!: number;

  @Field(() => Int)
  id!: number;

  @Field(() => String)
  name!: string;

  @Field(() => String)
  email!: string;

  @Field(() => String)
  body!: string;
}
