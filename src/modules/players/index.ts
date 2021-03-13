import { createModule } from 'graphql-modules';
import { resolvers } from './resolvers';
import { playerTypeDef } from './typeDefs';

export const playerModule = createModule({
  id: 'player',
  dirname: __dirname,
  typeDefs: [playerTypeDef],
  resolvers,
});
