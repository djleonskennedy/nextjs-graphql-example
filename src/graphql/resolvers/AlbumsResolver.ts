import { Ctx, Field, ObjectType, Query, Resolver } from "type-graphql";

@ObjectType({ description: "Album" })
class Album {
  @Field()
  userId: number;

  @Field()
  id: number;

  @Field()
  title: string;
}

@Resolver()
export class AlbumsResolver {
  @Query(() => [Album], { nullable: true })
  async albums(@Ctx() _ctx: any): Promise<Album[]> {
    const albums = await fetch(
      "https://jsonplaceholder.typicode.com/albums"
    ).then((response) => response.json());
    return Promise.resolve(albums);
  }
}
