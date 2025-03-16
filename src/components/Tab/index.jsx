import React from "react";
import Players from "../Players";
import GameBoard from "../GameBoard";
import Log from "../Log";
import { WINNING_COMBINATIONS } from "../../winning-combinations";
import GameOverMessage from "../GameOverMessage";

function deriveActivePlayer(turns) {
  let currentPlayer = "X";
  if (turns.length > 0 && turns[0] && turns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

const PLAYERS = {
  X: "Player 1",
  O: "Player 2",
};

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveWinner(board, players) {
  console.log(board);
  let winner = undefined;

  WINNING_COMBINATIONS.forEach((combination) => {
    const firstSquareSymbol = board[combination[0].row][combination[0].column];
    const secondSquareSymbol = board[combination[1].row][combination[1].column];
    const thirdSquareSymbol = board[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = players[firstSquareSymbol];
    }
  });
  return winner;
}

function deriveBoard(gameTurns) {
  let board = [...INITIAL_GAME_BOARD.map((row) => [...row])];

  gameTurns.forEach((turn) => {
    const { square, player } = turn;
    const { row, col } = square;
    board[row][col] = player;
  });

  return board;
}

export default function Tab() {
  const [gameTurns, setGameTurns] = React.useState([]);
  const [players, setPlayers] = React.useState(PLAYERS);

  function handlePlayerName(symbol, newName) {
    setPlayers((prevPlayers) => {
      return {
        ...prevPlayers,
        [symbol]: newName,
      };
    });
  }

  const activePlayer = deriveActivePlayer(gameTurns);

  const board = deriveBoard(gameTurns);

  const winner = deriveWinner(board, players);

  const hasDraw = gameTurns.length === 9 && !winner;

  function rematch() {
    console.log("aqui");
    setGameTurns([]);
  }

  function toggleActivePlayer(rowIndex, colIndex) {
    setGameTurns((prevTurn) => {
      const currentPlayer = deriveActivePlayer(prevTurn);
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurn,
      ];
      return updatedTurns;
    });
  }
  return (
    <main>
      <div id="game-container">
        <Players
          activePlayer={activePlayer}
          handlePlayerName={handlePlayerName}
          players={players}
        />
        {(winner || hasDraw) && (
          <GameOverMessage winner={winner} rematch={rematch} />
        )}
        <GameBoard onSelectPiece={toggleActivePlayer} board={board} />
      </div>
      <Log log={gameTurns} />
    </main>
  );
}
