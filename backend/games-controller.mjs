// Controllers for the Game Collection

import "dotenv/config";
import express from "express";
import * as games from "./games-model.mjs";

const PORT = process.env.PORT;
const app = express();
app.use(express.json()); // REST needs JSON MIME type.

// CREATE controller ******************************************
app.post("/games", (req, res) => {
  games
    .addGame(
      req.body.title,
      req.body.rating,
      req.body.platform,
      req.body.releaseDate
    )
    .then((game) => {
      console.log(`"${game.title}" was added to the collection.`);
      res.status(201).json(game);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({ Error: "Game was not added." });
    });
});

// RETRIEVE controller ****************************************************
app.get("/games", (req, res) => {
  games
    .returnGames()
    .then((games) => {
      if (games !== null) {
        console.log(`All games were retrieved from the collection.`);
        res.json(games);
      } else {
        res.status(404).json({ Error: "Games could not be found." });
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({ Error: "This page is not working." });
    });
});

// RETRIEVE by ID controller
app.get("/games/:_id", (req, res) => {
  games
    .returnGameById(req.params._id)
    .then((game) => {
      if (game !== null) {
        console.log(`"${game.title}" was retrieved, based on its ID.`);
        res.json(game);
      } else {
        res.status(404).json({ Error: "Game could not be found." });
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({ Error: "This page is not working." });
    });
});

// UPDATE controller ************************************
app.put("/games/:_id", (req, res) => {
  games
    .updateGame(
      req.params._id,
      req.body.title,
      req.body.rating,
      req.body.platform,
      req.body.releaseDate
    )
    .then((game) => {
      console.log(`"${game.title}" was updated.`);
      res.json(game);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({ Error: `"${game.title}" was not updated.` });
    });
});

// DELETE Controller ******************************
app.delete("/games/:_id", (req, res) => {
  games
    .removeGameById(req.params._id)
    .then((deletedCount) => {
      if (deletedCount === 1) {
        console.log(`Based on its ID, ${deletedCount} game was deleted.`);
        res.status(200).send({ Success: "Game was successfully deleted." });
      } else {
        res.status(404).json({ Error: "Game was not found." });
      }
    })
    .catch((error) => {
      console.error(error);
      res.send({
        Error: `An error occurred.`,
      });
    });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
