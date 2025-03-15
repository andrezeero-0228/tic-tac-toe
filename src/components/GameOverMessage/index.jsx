const GameOverMessage = ({ winner, rematch }) => {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner ? <p>{winner} won!</p> : <p>Its a draw!</p>}
      <button onClick={rematch}>Play Again</button>
    </div>
  );
};

export default GameOverMessage;
