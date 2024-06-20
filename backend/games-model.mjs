// Models for the Game Collection

// Import dependencies.
import mongoose from "mongoose";
import "dotenv/config";

// Connect based on the .env file parameters.
mongoose.connect(process.env.MONGODB_CONNECT_STRING, { useNewUrlParser: true });
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
  if (err) {
    res.status(500).json({ Error: "Unique and specific error message." });
  } else {
    console.log("Success: Unique and specific success message.");
  }
});

// SCHEMA: Define the collection's schema.
const gameSchema = mongoose.Schema({
  title: { type: String, required: true },
  rating: {
    type: Number,
    required: true,
    default: 1,
    min: [1, "Rate 1 - 10"],
    max: 10,
  },
  platform: { type: String, required: true },
  releaseDate: {
    type: Date,
    required: true,
    min: "1958-10-01",
    defalut: Date.now,
  },
});

// Compile the model from the schema
// by defining the collection name "games".
const games = mongoose.model("Games", gameSchema);

// CREATE model *****************************************
const addGame = async (title, rating, platform, releaseDate) => {
  const game = new games({
    title: title,
    rating: rating,
    platform: platform,
    releaseDate: releaseDate,
  });
  return game.save();
};

// RETRIEVE model *****************************************
// Retrieve all documents and return a promise.
const returnGames = async () => {
  const query = games.find();
  return query.exec();
};

// RETRIEVE by ID
const returnGameById = async (_id) => {
  const query = games.findById({ _id: _id });
  return query.exec();
};

// DELETE model based on _id  *****************************************
const removeGameById = async (_id) => {
  const result = await games.deleteOne({ _id: _id });
  return result.deletedCount;
};

// UPDATE model *****************************************************
const updateGame = async (_id, title, rating, platform, releaseDate) => {
  const result = await games.replaceOne(
    { _id: _id },
    {
      title: title,
      rating: rating,
      platform: platform,
      releaseDate: releaseDate,
    }
  );
  return {
    _id: _id,
    title: title,
    rating: rating,
    platform: platform,
    releaseDate: releaseDate,
  };
};

// EXPORT the variables for use in the controller file.
export { addGame, returnGames, returnGameById, updateGame, removeGameById };
