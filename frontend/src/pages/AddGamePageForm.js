import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Change the icons, function names, and parameters
// to fit your portfolio topic and schema.

export const AddGamePageForm = () => {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("1");
  const [platform, setPlatform] = useState("");
  const [releaseDate, setReleaseDate] = useState("");

  const redirect = useNavigate();

  const addGame = async () => {
    const newGame = {
      title,
      rating,
      platform,
      releaseDate,
    };

    const response = await fetch("/games", {
      method: "post",
      body: JSON.stringify(newGame),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 201) {
      alert(`Game added successfully`);
      redirect("/games");
    } else {
      alert(
        `Game not added successfully. You have the following error, ${response.status}.`
      );
      redirect("/games");
    }
  };

  return (
    <>
      <article>
        <h2>Add a game</h2>
        <p>Add your favorite game to the collection.</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <fieldset>
            <legend>Which game are you adding?</legend>
            <label for="title">Game title</label>
            <input
              type="text"
              placeholder="Title of the game"
              required="true"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              id="title"
            />

            <label for="rating">Rating</label>
            <input
              type="number"
              value={rating}
              placeholder="Rate game 1 - 10"
              required="true"
              onChange={(e) => setRating(e.target.value)}
              id="rating"
            />

            <label for="platform">Platform</label>
            <input
              type="text"
              placeholder="Original platform of the game"
              required="true"
              value={platform}
              onChange={(e) => setPlatform(e.target.value)}
              id="platform"
            />

            <label for="releaseDate">Release Date</label>
            <input
              type="date"
              placeholder="Release date of the game"
              default="Date.now"
              required="true"
              value={releaseDate}
              onChange={(e) => setReleaseDate(e.target.value)}
              id="releaseDate"
            />

            <label for="submit">
              <button type="submit" onClick={addGame} id="submit">
                Add
              </button>{" "}
              to the collection
            </label>
          </fieldset>
        </form>
      </article>
    </>
  );
};

export default AddGamePageForm;
