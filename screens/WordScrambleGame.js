import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const WordScrambleGame = () => {
  const words = ['hello', 'world', 'react', 'native', 'javascript', 'programming'];
  const [scrambledWord, setScrambledWord] = useState('');
  const [currentWord, setCurrentWord] = useState('');
  const [score, setScore] = useState(0);

  // Function to shuffle the letters of a word
  function shuffleWord(word) {
    const shuffled = word.split('').sort(() => 0.5 - Math.random()).join('');
    return shuffled === word ? shuffleWord(word) : shuffled;
  }

  // Function to pick a random word from the list
  function pickRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  }

  // Function to start a new round
  function startNewRound() {
    const word = pickRandomWord();
    setScrambledWord(shuffleWord(word));
    setCurrentWord(word);
  }

  useEffect(() => {
    startNewRound();
  }, []);

  function handleGuess() {
    if (currentWord.toLowerCase() === scrambledWord.toLowerCase()) {
      setScore(score + 1);
      Alert.alert('Correct!', `You got it! Your score: ${score + 1}`, [
        { text: 'Next', onPress: startNewRound },
      ]);
    } else {
      Alert.alert('Incorrect', `Try again!`, [{ text: 'OK' }]);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Word Scramble</Text>
      <Text style={styles.word}>{scrambledWord}</Text>
      <TextInput
        style={styles.input}
        value={currentWord}
        onChangeText={(text) => setCurrentWord(text)}
        placeholder="Enter the word"
      />
      <Button title="Guess" onPress={handleGuess} />
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
  word: {
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  score: {
    fontSize: 18,
    marginTop: 20,
  },
});

export default WordScrambleGame;
