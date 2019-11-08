import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function LiftScreen() {
  return (
    <View style={styles.container}>
      <Text>Lift Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
