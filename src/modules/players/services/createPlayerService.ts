import { Player } from '../models';
import { CreatePlayerType } from '../resolvers';

export function createPlayerService({ name }: CreatePlayerType) {
  return Player.create({ name, isSpectator: false });
}
