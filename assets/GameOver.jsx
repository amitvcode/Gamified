import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const GameOver = ({ highestScore, overlayStyle, modalStyle, resetGame }) => {
  return (
    <View style={[styles.overlay, overlayStyle]}>
      <View style={[styles.modal, modalStyle]}>
        <Text style={styles.heading}>You lost...</Text>
        <Text style={styles.highestScore}>Highest Score: {highestScore}</Text>
        <Text style={styles.message}>You clicked the same colour twice.</Text>
        <TouchableOpacity style={styles.button} onPress={resetGame}>
          <Text style={styles.buttonText}>Try Again</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  highestScore: {
    fontSize: 20,
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default GameOver;