import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const colors = [
  { name: 'Red', value: '#FF0000' },
  { name: 'Green', value: '#008000' },
  { name: 'Blue', value: '#0000FF' },
  { name: 'Yellow', value: '#FFFF00' },
  { name: 'Purple', value: '#800080' },
  { name: 'Orange', value: '#FFA500' },
];

const GuessTheColorGame = () => {
  const [currentColor, setCurrentColor] = useState({});
  const [options, setOptions] = useState([]);

  // Function to pick a random color
  function pickRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }

  // Function to start a new round
  function startRound() {
    const newColor = pickRandomColor();
    setCurrentColor(newColor);

    // Shuffle the options, including the correct color
    const shuffledOptions = [...colors];
    shuffledOptions.sort(() => Math.random() - 0.5);
    setOptions(shuffledOptions.slice(0, 4));
  }

  // Function to handle player's guess
  function handleGuess(guessColor) {
    if (guessColor === currentColor.name) {
      alert('Correct!');
    } else {
      alert(`Wrong! The correct color was ${currentColor.name}`);
    }
    startRound();
  }

  // Initialize the game
  useEffect(() => {
    startRound();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Guess the Color</Text>
      <Text style={[styles.colorText, { color: currentColor.value }]}>{currentColor.name}</Text>
      <View style={styles.optionsContainer}>
        {options.map((option) => (
          <TouchableOpacity
            key={option.name}
            style={[styles.option, { backgroundColor: option.value }]}
            onPress={() => handleGuess(option.name)}
          >
            <Text style={styles.optionText}>{option.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  colorText: {
    fontSize: 30,
    marginBottom: 20,
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  option: {
    width: 120,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 10,
  },
  optionText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

export default GuessTheColorGame;
