const mongoose = require("mongoose");

const currentIDSchema = new mongoose.Schema(
  {
    currentID: { type: Number, default: 1 }, // Default starting value
  },
  { versionKey: false }
);

const CurrentID = mongoose.model("CurrentID", currentIDSchema);

module.exports = CurrentID;
