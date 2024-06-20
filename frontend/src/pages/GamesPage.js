import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import GameList from "../components/GameList";
import { Link } from "react-router-dom";
import { IoMdAddCircleOutline } from "react-icons/io";

function GamesPage({ setGame }) {
  // Use the Navigate for redirection
  const redirect = useNavigate();

  // Use state to bring in the data
  const [games, setGames] = useState([]);

  // RETRIEVE the entire list of games
  const loadGames = async () => {
    const response = await fetch("/games");
    const games = await response.json();
    setGames(games);
  };

  // UPDATE a single game
  const onEditGame = async (game) => {
    setGame(game);
    redirect("/update");
  };

  // DELETE a single game
  const onDeleteGame = async (_id) => {
    const response = await fetch(`/games/${_id}`, { method: "DELETE" });
    if (response.status === 200) {
      const getResponse = await fetch("/games");
      const games = await getResponse.json();
      setGames(games);
    } else {
      console.error(`The game was successfully removed from the collection.`);
    }
  };

  // LOAD all the games
  useEffect(() => {
    loadGames();
  }, []);

  // DISPLAY the games
  return (
    <>
      <h2>List of Games</h2>
      <p>Game Library</p>
      <Link to="/create" id="link" className="addGame">
        <i>
          <IoMdAddCircleOutline />
        </i>{" "}
        Add New Game
      </Link>
      <GameList games={games} onEdit={onEditGame} onDelete={onDeleteGame} />
    </>
  );
}

export default GamesPage;
