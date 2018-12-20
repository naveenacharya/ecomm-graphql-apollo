import { gql } from 'apollo-server';

const typeDefs = gql`
  # This is the "Product" type.
  type Product {
    id: Int!,
    name: String,
    description: String,
    category: String,
    price: Float,
    seller: String,
    reviews: [Review]
  }

  type Review {
    id: Int!,
    productId: Int!,
    rating: Int,
    title: String,
    comment: String,
    userName: String
  }

  # The "Query" type is the root of all GraphQL queries.
  type Query {
    products(name: String, category: String): [Product]
    product(id: Int!): Product
  }
`;

export default typeDefs;

