import { ApolloServer } from 'apollo-server';
import resolvers from './graphql/resolvers/products';
import typeDefs from './graphql/schema/products';

const server = new ApolloServer({ typeDefs, resolvers });

// This `listen` method launches a web-server.
server.listen().then(({ url }) => {
  console.log(`Apollo 🚀  Server running at ${url}`);
});

