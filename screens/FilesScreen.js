import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function FilesScreen() {
  return (
    <View style={styles.container}>
      <Text style={{ ...styles.text }}>Files Screen</Text>
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
  text: {
    fontSize: 36,
    fontWeight: '300'
  }
});
