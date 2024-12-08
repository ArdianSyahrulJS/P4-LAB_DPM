import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function ScoreControls({ onIncrease, onDecrease }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.button, styles.increase]} onPress={onIncrease}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.decrease]} onPress={onDecrease}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 150,
    marginVertical: 10,
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5, // Efek bayangan di Android
    shadowColor: '#000', // Efek bayangan di iOS
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  increase: {
    backgroundColor: '#4CAF50', // Warna hijau untuk tombol tambah
  },
  decrease: {
    backgroundColor: '#FF5252', // Warna merah untuk tombol kurangi
  },
  buttonText: {
    color: '#FFF',
    fontSize: 28,
    fontWeight: 'bold',
  },
});
