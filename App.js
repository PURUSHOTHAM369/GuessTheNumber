import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function App() {
  const [targetNumber, setTargetNumber] = useState(generateRandomNumber());
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');

  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  const handleGuess = () => {
    const numericGuess = parseInt(guess);

    if (isNaN(numericGuess)) {
      Alert.alert('Invalid Input', 'Please enter a valid number.');
      return;
    }

    if (numericGuess < targetNumber) {
      setMessage('Too low! Try again.');
    } else if (numericGuess > targetNumber) {
      setMessage('Too high! Try again.');
    } else {
      setMessage(`🎉 Correct! The number was ${targetNumber}`);
    }
  };

  const restartGame = () => {
    setTargetNumber(generateRandomNumber());
    setGuess('');
    setMessage('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Guess the Number (1-100)</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your guess"
        keyboardType="numeric"
        value={guess}
        onChangeText={setGuess}
      />
      <Button title="Submit Guess" onPress={handleGuess} />
      <Text style={styles.message}>{message}</Text>
      {message.includes('Correct') && <Button title="Play Again" onPress={restartGame} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#fefefe',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderColor: '#666',
    borderWidth: 1,
    padding: 10,
    marginBottom: 12,
    borderRadius: 5,
    fontSize: 18,
  },
  message: {
    fontSize: 18,
    marginTop: 20,
    textAlign: 'center',
  },
});
