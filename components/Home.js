import React from 'react';
import { StyleSheet, Text, View , Button} from 'react-native'
import { connect } from 'react-redux'

import Message from './Message'

class Home extends React.Component {
  render() {

    const { messages } = this.props;

    console.log(messages)
    
    return (
      <View style={styles.container}>
          <View  style={styles.button}>
            <Button
              title="Home"
              onPress={() => this.props.navigation.navigate('home')}
              color="#841584"
            />
          </View>
          <View  style={styles.button}>
            <Button
              title="Create message"
              onPress={() => this.props.navigation.navigate('create')}
              color="#841584"
            />
          </View>
        <Text>Tous les messages :</Text>
        {messages.map( (message, index) => (
           <Message key={index} message={message} />
        ))}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button : {
      marginBottom : 5
  }
});

export default connect(mapStateToProps)(Home)