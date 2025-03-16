import React from "react";
import PlayerInfo from "../PlayerInfo";

export default function Players({ activePlayer, ...rest }) {
  return (
    <ol id="players" className="highlight-player">
      <PlayerInfo
        name={"Player 1"}
        piece={"X"}
        isActive={activePlayer === "X"}
        {...rest}
      />
      <PlayerInfo
        name={"Player 2"}
        piece={"O"}
        isActive={activePlayer === "O"}
        {...rest}
      />
    </ol>
  );
}
