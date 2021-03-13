import { gql } from 'graphql-modules';

export const playerTypeDef = gql`
  type Player {
    id: ID!
    name: String!
    isSpectator: Boolean
  }

  type Query {
    players: [Player!]!
    player(id: ID!): Player
  }

  type Mutation {
    createPlayer(name: String!): Player
  }
`;
