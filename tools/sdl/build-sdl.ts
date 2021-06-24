import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { resolvers } from '../../src/graphql/resolvers';

const run = async () => {
  await buildSchema({
    resolvers,
    emitSchemaFile: {
      // eslint-disable-next-line no-path-concat
      path: __dirname + '/tmp/schema.gql',
      commentDescriptions: true,
      sortedSchema: false,
    },
  });
};

run();
