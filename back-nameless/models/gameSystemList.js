const mongoose = require("mongoose");

const gameSystemListSchema = new mongoose.Schema(
  {
    available_game_systems: [String],
  },
  { versionKey: false }
);

const gameSystemList = mongoose.model("GameSystemList", gameSystemListSchema);

module.exports = gameSystemList;
