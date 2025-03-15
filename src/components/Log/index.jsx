export default function Log({ log }) {
  return (
    <ol id="log">
      {log.map((l) => {
        const { row, col: column } = l.square;
        return (
          <li
            key={`${row}${column}`}
          >{`${l.player} selected row ${row} and column ${column}`}</li>
        );
      })}
    </ol>
  );
}
