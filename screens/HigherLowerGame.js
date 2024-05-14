import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HigherLowerGame = () => {
  const [currentNumber, setCurrentNumber] = useState(0);
  const [nextNumber, setNextNumber] = useState(0);
  const [isHigher, setIsHigher] = useState(false);
  const [score, setScore] = useState(0);

  // Function to generate a random number between 1 and 100
  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  // Function to start a new round
  function startRound() {
    setCurrentNumber(nextNumber);
    setNextNumber(generateRandomNumber());
  }

  // Function to handle player's guess
  function handleGuess(guessHigher) {
    if ((guessHigher && nextNumber > currentNumber) || (!guessHigher && nextNumber < currentNumber)) {
      setScore(score + 1);
    } else {
      setScore(0);
    }
    startRound();
  }

  // Initialize the game
  useEffect(() => {
    setCurrentNumber(generateRandomNumber());
    setNextNumber(generateRandomNumber());
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Higher or Lower</Text>
      <Text style={styles.currentNumber}>Current Number: {currentNumber}</Text>
      <Text style={styles.nextNumber}>Next Number: {nextNumber}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Higher" onPress={() => handleGuess(true)} />
        <Button title="Lower" onPress={() => handleGuess(false)} />
      </View>
      <Text style={styles.score}>Score: {score}</Text>
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
  currentNumber: {
    fontSize: 20,
    marginBottom: 10,
  },
  nextNumber: {
    fontSize: 20,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  score: {
    fontSize: 18,
  },
});

export default HigherLowerGame;
