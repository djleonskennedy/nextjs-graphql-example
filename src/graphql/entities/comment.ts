import { Field, ObjectType } from "type-graphql";

@ObjectType({ description: "User comment about post" })
export class Comment {
  @Field()
  postId: number;

  @Field()
  id: number;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  body: string;
}
