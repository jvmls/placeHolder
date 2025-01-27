const express = require("express");
const Games = require("../models/game");
const CurrentID = require("../models/idModel");

const router = express.Router();

router.get("/games", async (req, res) => {
  try {
    const games = await Games.find();

    if (games.length === 0) {
      return res.status(404).send("No games found.");
    }

    res.json(games);
  } catch (err) {
    console.log("Error fetching games:", err);
    res.status(500).send("Error retrieving games.");
  }
});

router.post("/games", async (req, res) => {
  try {
    const newGame = req.body;
    let currentIDDoc = await CurrentID.findOne();

    if (!currentIDDoc) {
      currentIDDoc = await CurrentID.create({ currentID: 0 });
    }
    const newGameID = currentIDDoc.currentID + 1;
    newGame.game_id = String(newGameID);

    await Games.create(newGame);
    res.status(200).json(newGame);

    currentIDDoc.currentID = newGameID;
    await currentIDDoc.save();
  } catch (err) {
    console.log("error when adding game:", err);
    res.status(500).send("Error when adding game!!");
  }
});

router.delete("/games/:game_id", async (req, res) => {
  try {
    const id = req.params.game_id;

    const deleteGame = await Games.findOneAndDelete({ game_id: id });
    if (!deleteGame) {
      return res.status(404).send("Game not found.");
    }
    res.status(200).send(`Game ${deleteGame.game_name} has been deleted.`);
  } catch (err) {
    console.log("Error deleting game:", err);
    res.status(500).send("Error deleting game.");
  }
});

module.exports = router;
