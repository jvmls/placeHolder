const express = require("express");
const Games = require("../models/game");
const CurrentID = require("../models/idModel");
const gameSystemList = require("../models/gameSystemList");

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

router.get("/games/:game_id", async (req, res) => {
  try {
    const game = await Games.findOne({ game_id: req.params.game_id });

    if (!game) {
      return res.status(404).send("Game not found.");
    }

    res.json(game);
  } catch (err) {
    console.log("Error fetching game:", err);
    res.status(500).send("Error retrieving game.");
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

router.put("/games/:game_id", async (req, res) => {
  try {
    const id = req.params.game_id;
    const updatedData = req.body;

    const updatedGame = await Games.findOneAndUpdate(
      { game_id: id },
      updatedData,
      { new: true }
    );

    if (!updatedGame) {
      return res.status(404).send("Game not found.");
    }

    res.status(200).json(updatedGame);
  } catch (err) {
    console.log("Error updating game:", err);
    res.status(500).send("Error updating game.");
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

router.get("/gameSys", async (req, res) => {
  try {
    const gameSystems = await gameSystemList.find();

    if (!gameSystems || gameSystems.length === 0) {
      return res.status(404).json({ message: "n ta fundando esse krl" });
    }

    res.json(gameSystems);
  } catch (err) {
    console.error("Error fetching game systems:", err);
    res.status(500).json({ message: "Error retrieving game systems." });
  }
});

module.exports = router;
