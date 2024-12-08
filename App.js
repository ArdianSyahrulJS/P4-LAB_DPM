import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import ScoreDisplay from './components/ScoreDisplay';
import ScoreControls from './components/ScoreControls';
import ResetButton from './components/ResetButton';

export default function App() {
  const [teamAScore, setTeamAScore] = useState(0);
  const [teamBScore, setTeamBScore] = useState(0);

  const handleIncrease = (team) => {
    if (team === 'A') setTeamAScore(teamAScore + 1);
    else setTeamBScore(teamBScore + 1);
    checkWinner();
  };

  const handleDecrease = (team) => {
    if (team === 'A' && teamAScore > 0) setTeamAScore(teamAScore - 1);
    if (team === 'B' && teamBScore > 0) setTeamBScore(teamBScore - 1);
  };

  const resetScores = () => {
    setTeamAScore(0);
    setTeamBScore(0);
  };

  const checkWinner = () => {
    if (teamAScore + 1 === 10) {
      Alert.alert('🎉 Pemenang!', '🏆 Tim A Menang!');
    } else if (teamBScore + 1 === 10) {
      Alert.alert('🎉 Pemenang!', '🏆 Tim B Menang!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>⚽ Skor Futsal ⚽</Text>
      
      <View style={styles.scoreContainer}>
        {/* Team A Section */}
        <View style={styles.teamContainer}>
          <ScoreDisplay teamName="🔥 Tim A" score={teamAScore} />
          <ScoreControls
            onIncrease={() => handleIncrease('A')}
            onDecrease={() => handleDecrease('A')}
          />
        </View>

        {/* Divider */}
        <Text style={styles.vsText}>VS</Text>

        {/* Team B Section */}
        <View style={styles.teamContainer}>
          <ScoreDisplay teamName="💪 Tim B" score={teamBScore} />
          <ScoreControls
            onIncrease={() => handleIncrease('B')}
            onDecrease={() => handleDecrease('B')}
          />
        </View>
      </View>

      {/* Reset Button */}
      <ResetButton onReset={resetScores} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFAFA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
  },
  scoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '90%',
    padding: 20,
    backgroundColor: '#E0F7FA',
    borderRadius: 15,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  vsText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FF5252',
  },
  teamContainer: {
    alignItems: 'center',
  },
});
