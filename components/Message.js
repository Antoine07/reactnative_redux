import React from 'react';
import { StyleSheet, Text, View } from 'react-native'

class Message extends React.Component {
  render() {

    const { message } = this.props;
    return (
      <View style={styles.item}>
       <Text>Name : {message.name}</Text>
       <Text>{message.message}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default Message