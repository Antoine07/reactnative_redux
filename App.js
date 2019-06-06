import React from 'react';
import Navigate from './navigate/Navigate'
import { StyleSheet, Text, View , Button} from 'react-native'

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