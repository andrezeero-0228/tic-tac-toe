import React from "react";
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectPiece, board }) {
  return (
    <ol id="game-board">
      {board.map((row, index) => (
        <li key={index}>
          <ol>
            {row.map((col, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectPiece(index, colIndex)}
                  disabled={col !== null}
                >
                  {col}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
