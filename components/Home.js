import React from 'react';
import { StyleSheet, Text, View , Button, FlatList, Image} from 'react-native'
import { connect } from 'react-redux'

class Home extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      showMessage : false,
    }
  }

  _toggleMessage = () =>
    this.setState({ showMessage : !this.state.showMessage })

  _keyExtractor = (item, index) => item.id.toString();

  _showMessage = () => { 

    const { messages } = this.props;

    return (
        <FlatList
          data={messages}
          keyExtractor={this._keyExtractor}
          renderItem={({item}) => (
            <View>
                  <Text>{item.name}</Text>
                  <Text>{item.message}</Text>
            </View>
          )}
        />
    )
  }

  render() {

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View  style={styles.button}>
            <Button
              title="Show messages toggle"
              onPress={this._toggleMessage}
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
        </View>
        <View style={styles.content}>
          { this.state.showMessage ? this._showMessage() : 
            <Image
            style={{
              width: 150, 
              height: 150
            }}
            source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
          />
          }
        </View>
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
  },
  header : {
    flex: 1
  },
  content : {
    flex: 4,
    marginLeft : 10
  },
  button : {
      marginBottom : 5
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    flex : 1
  },
  welcome : {
    margin : 10
  }
  
});

export default connect(mapStateToProps)(Home)