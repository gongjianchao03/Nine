import { useState } from 'react';

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Win(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function isDraw(squares) {
  let b = true;
  for (let a = 0; a < squares.length; a++) {
    if (squares[a] === null) b = false;
  }
  return b;
}

export default function App() {
  const [player, setPlayer] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    if (squares[i] || Win(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (player) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    setSquares(nextSquares);
    setPlayer(!player);
  }

  function showSquares() {
    alert('squares数组: ' + JSON.stringify(squares));
  }

  const winner = Win(squares);
  let status;
  if (winner) {
    status = '获胜方是' + winner;
  } else if (isDraw(squares)) {
    status = '平局';
  } else {
    status = '下一轮：' + (player ? 'X' : 'O');
  }

  return (
    <>
      <div className="border-row">{status}</div>
      <div className="border-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="border-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="border-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
      <div className="border-row">
        <button onClick={showSquares}>展示</button>
      </div>
    </>
  );
}

