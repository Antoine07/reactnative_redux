import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Navigate from './navigate/Navigate'

// create store

import { createStore } from 'redux'
import message from './reducers/message'

import { Provider } from 'react-redux'

const store = createStore(message)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store} >
        <Navigate />
        
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});