import mongoose from 'mongoose';
import { Player } from '../../players/models';

export const RoomSchema = new mongoose.Schema({
  name: String,
  isActive: {
    type: Boolean,
    default: true,
  },
  roomLeader: String,
  players: [Player],
});
