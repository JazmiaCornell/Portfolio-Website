import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const EditGamePageForm = ({ gameToEdit }) => {
  const [title, setTitle] = useState(gameToEdit.title);
  const [rating, setRating] = useState(gameToEdit.platform);
  const [platform, setPlatform] = useState(gameToEdit.platform);
  const [releaseDate, setReleaseDate] = useState(
    gameToEdit.releaseDate.slice(0, 10)
  );

  const redirect = useNavigate();

  const editGame = async () => {
    const response = await fetch(`/games/${gameToEdit._id}`, {
      method: "PUT",
      body: JSON.stringify({
        title: title,
        rating: rating,
        platform: platform,
        releaseDate: releaseDate,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.status === 200) {
      alert(`${gameToEdit.title} was successfully edited.`);
    } else {
      const errMessage = await response.json();
      alert(
        `${gameToEdit.title} was not successfully edited. You have the following error, ${errMessage.Error}.`
      );
    }
    redirect("/games");
  };

  return (
    <>
      <article>
        <h2>Edit a game</h2>
        <p>Make changes to game information.</p>
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
              value={title}
              required="true"
              onChange={(e) => setTitle(e.target.value)}
              id="title"
            />

            <label for="rating">Rating</label>
            <input
              type="number"
              value={rating}
              required="true"
              onChange={(e) => setRating(e.target.value)}
              id="rating"
            />

            <label for="platform">Platform</label>
            <input
              type="text"
              value={platform}
              required="true"
              onChange={(e) => setPlatform(e.target.value)}
              id="platform"
            />

            <label for="releaseDate">Release Date</label>
            <input
              type="date"
              value={releaseDate}
              required="true"
              default="Date.now"
              onChange={(e) => setReleaseDate(e.target.value)}
              pattern="\d{2}=\d{2}-\d{2}"
              id="releaseDate"
            />

            <label for="submit">
              <button onClick={editGame} id="submit">
                Save
              </button>{" "}
              updates to the collection
            </label>
          </fieldset>
        </form>
      </article>
    </>
  );
};
export default EditGamePageForm;
