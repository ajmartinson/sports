import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


import { store, rrfProps } from './store/store.js';

import { Provider } from 'react-redux';

import { ReduxFirestoreProvider } from 'react-redux-firebase';

import { useScreens } from 'react-native-screens';

import AppNavigator from './navigation/AppNavigator';

useScreens();

export default function App() {
  return (
    <Provider store={store} >
      <ReduxFirestoreProvider {...rrfProps}>
        <View style={styles.container}>
          <AppNavigator />
        </View>
      </ReduxFirestoreProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
