import React from "react";
import PlayerInfo from "../PlayerInfo";

export default function Players({ activePlayer, handlePlayerName, players }) {
  return (
    <ol id="players" className="highlight-player">
      <PlayerInfo
        name={"Player 1"}
        piece={"X"}
        isActive={activePlayer === "X"}
        handlePlayerName={handlePlayerName}
        players={players}
      />
      <PlayerInfo
        name={"Player 2"}
        piece={"O"}
        isActive={activePlayer === "O"}
        handlePlayerName={handlePlayerName}
        players={players}
      />
    </ol>
  );
}
