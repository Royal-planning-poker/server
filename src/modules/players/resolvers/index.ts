import { Player } from '../models';
import { createPlayerService } from '../services/createPlayerService';

type FindPlayer = {
  id: string;
};

export type CreatePlayerType = {
  name: string;
};

export const resolvers = {
  Query: {
    players: () => Player.find(),
    player: (_: unknown, { id }: FindPlayer) => Player.findById(id),
  },

  Mutation: {
    createPlayer: (_: unknown, { name }: CreatePlayerType): Promise<typeof Player> => createPlayerService({ name }),
  },
};
