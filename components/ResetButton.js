import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function ResetButton({ onReset }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onReset} activeOpacity={0.7}>
      <Text style={styles.buttonText}>🔄 Reset Skor</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FF5C5C',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    elevation: 5, // Tambahkan shadow pada Android
    shadowColor: '#000', // Tambahkan shadow pada iOS
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1.2,
  },
});
