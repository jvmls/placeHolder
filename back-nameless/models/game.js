// models/game.js
const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema(
  {
    game_id: { type: String, unique: true },
    game_name: String,
    game_status: String,
    game_creation_date: Date,
    game_players: [String],
    game_system: String,
  },
  { versionKey: false }
);

const gamesDatabase = mongoose.model("Game", gameSchema);

module.exports = gamesDatabase;
