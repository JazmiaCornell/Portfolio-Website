import React from "react";

// Change the icons, function names, and parameters
// to fit your portfolio topic and schema.

import { TiDeleteOutline } from "react-icons/ti";
import { MdOutlineModeEdit } from "react-icons/md";

function Game({ game, onEdit, onDelete }) {
  return (
    <tr>
      <td>{game.title}</td>
      <td>{game.rating}</td>
      <td>{game.platform}</td>
      <td>{game.releaseDate.slice(0, 10)}</td>

      {/* Update these icons to something that matches your style. */}
      <td>
        <TiDeleteOutline onClick={() => onDelete(game._id)} />
      </td>
      <td>
        <MdOutlineModeEdit onClick={() => onEdit(game)} />
      </td>
    </tr>
  );
}

export default Game;
