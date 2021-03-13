import { Schema, model } from 'mongoose';

export const RoomSchema = new Schema({
  roomId: String,
  cards: [
    {
      playerId: String,
      selectedValue: String,
    },
  ],
});

export const Room = model('Room', RoomSchema);
