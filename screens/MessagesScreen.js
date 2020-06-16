import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { useFirestore } from 'react-redux-firebase';

export default function MessagesScreen() {
  const firestore = useFirestore();

  return (
    <View style={styles.container}>
      <Text style={{ ...styles.text }}>Messages Screen</Text>
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
