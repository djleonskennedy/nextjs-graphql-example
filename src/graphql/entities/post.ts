import { Field, ObjectType } from 'type-graphql';

@ObjectType({ description: 'Album' })
export class Post {
  @Field()
  id: number;

  @Field()
  title: string;

  @Field()
  body: string;
}
