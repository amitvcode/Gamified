import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

function Square({ value, onSquareClick }) {
  return (
    <TouchableOpacity style={styles.square} onPress={onSquareClick}>
      <Text style={styles.squareText}>{value}</Text>
    </TouchableOpacity>
  );
}

function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`;
  }

  return (
    <View>
      <Text style={styles.status}>{status}</Text>
      <View style={styles.boardRow}>
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </View>
      <View style={styles.boardRow}>
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </View>
      <View style={styles.boardRow}>
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </View>
    </View>
  );
}

export default function TicTacToeGame() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = `Go to move #${move}`;
    } else {
      description = 'Restart';
    }
    return (
      <TouchableOpacity key={move} onPress={() => jumpTo(move)} >
        <Text style={styles.moveButton}>{description}</Text>
      </TouchableOpacity>
    );
  });

  return (
    <View style={styles.container}>
      <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      <View style={styles.moveList}>{moves}</View>
    </View>
  );
}

function calculateWinner(squares) {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  status: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  boardRow: {
    flexDirection: 'row',
    backgroundColor:'#20ad5f',

  },
  square: {
    width: 80,
    height: 80,
    borderWidth: 2,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  squareText: {
    fontSize: 40,
    fontWeight: 'bold',
    color:'#fff'
  },
  moveList: {
    marginTop: 20,
  },
  moveButton: {
    fontSize: 22,
    marginVertical: 5,
    backgroundColor:'#20ad5f',
    color:'#fff',
    fontWeight:'bold',
    alignItems:"center",
    justifyContent:'center',
    borderRadius:5,
    padding:5

  },
});