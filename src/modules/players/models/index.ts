import mongoose from 'mongoose';

export const PlayerSchema = new mongoose.Schema({
  name: String,
  isSpectator: Boolean,
});

export const Player = mongoose.model('Player', PlayerSchema);
