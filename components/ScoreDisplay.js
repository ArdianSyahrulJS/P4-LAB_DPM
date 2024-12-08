import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ScoreDisplay({ teamName, score }) {
  return (
    <View style={styles.container}>
      <Text style={styles.teamName}>{teamName}</Text>
      <View style={styles.scoreContainer}>
        <Text style={styles.score}>{score}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 200,
    borderRadius: 15,
    padding: 20,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E0F7FA', // Background solid dengan warna cerah
    elevation: 5, // Bayangan untuk Android
    shadowColor: '#000', // Bayangan untuk iOS
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  teamName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#00796B', // Warna nama tim yang kontras
    marginBottom: 10,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  scoreContainer: {
    backgroundColor: '#FFF', // Kotak putih untuk skor
    borderRadius: 10,
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3, // Bayangan ringan
  },
  score: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#00796B', // Warna skor biru kehijauan yang mencolok
  },
});
