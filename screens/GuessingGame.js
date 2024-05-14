import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const GuessingGame = () => {
  const [guess, setGuess] = useState('');
  const [feedback, setFeedback] = useState('Guess a number between 1 and 100');
  const [number, setNumber] = useState(generateRandomNumber());

  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  function handleGuess() {
    const parsedGuess = parseInt(guess);

    if (isNaN(parsedGuess) || parsedGuess < 1 || parsedGuess > 100) {
      Alert.alert('Invalid Guess', 'Please enter a number between 1 and 100', [
        { text: 'OK', onPress: () => setGuess('') },
      ]);
      return;
    }

    if (parsedGuess === number) {
      setFeedback(`Congratulations! ${number} is the correct number.`);
    } else if (parsedGuess < number) {
      setFeedback('Too low! Try a higher number.');
    } else {
      setFeedback('Too high! Try a lower number.');
    }

    setGuess('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{feedback}</Text>
      <TextInput
        style={styles.input}
        value={guess}
        onChangeText={(text) => setGuess(text)}
        keyboardType="numeric"
      />
      <View>
      <Button title="Guess"  onPress={handleGuess} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
 
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 5,
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default GuessingGame;
