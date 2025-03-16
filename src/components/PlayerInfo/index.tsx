import React, { useState } from "react";

export default function PlayerInfo({
  name,
  piece,
  isActive,
  handlePlayerName,
}) {
  const [playerName, setPlayerName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);

  let playerNameComponent = <span className="player-name">{playerName}</span>;

  const handleChange = (event) => {
    setPlayerName(event.target.value);
  };

  const handleEditClick = () => {
    setIsEditing((prevState) => !prevState);
    if (isEditing) {
      handlePlayerName(piece, playerName);
    }
  };

  if (isEditing) {
    playerNameComponent = (
      <input type="text" value={playerName} onChange={handleChange} />
    );
  }
  return (
    <li className={isActive ? "active" : ""}>
      <span className="player">
        {playerNameComponent}
        <span className="player-symbol">{piece}</span>
        <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
      </span>
    </li>
  );
}
