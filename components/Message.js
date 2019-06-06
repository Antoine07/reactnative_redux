import React from 'react';
import { StyleSheet, Text, View } from 'react-native'

class Message extends React.Component {
  render() {

    const { message } = this.props;
    return (
      <View style={styles.container}>
       <Text>Name : {message.name}</Text>
       <Text>{message.message}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
 
  },
  message : {
      color : 'blue'
  }
});

export default Message