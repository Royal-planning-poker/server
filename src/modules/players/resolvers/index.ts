import { Player } from '../models';

type FindPlayer = {
  id: string;
};

type CreatePlayer = {
  name: string;
};

export const resolvers = {
  Query: {
    players: () => Player.find(),
    player: (_: unknown, { id }: FindPlayer) => Player.findById(id),
  },

  Mutation: {
    createPlayer: (_: unknown, { name }: CreatePlayer): Promise<typeof Player> =>
      Player.create({ name, isSpectator: false }),
  },
};
