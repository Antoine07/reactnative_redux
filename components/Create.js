import React from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native'
import { connect } from 'react-redux'

import { createMessage } from '../actions/actions'

class Create extends React.Component {

  constructor(props){
    super(props);
    this.state = { create : null };

    this.message = null
    this.name = null
  }

   // ne pas soliciter le render
  _handleChangeMessage = (message) => this.message = message ;
  _handleChangeName = (name) => this.name = name ;

  _create = () => {

    this.props.create({ message : this.message, name : this.name})

    this.props.navigation.navigate('home')
  }

  render() {

    return (
      <View style={styles.container}>
        <Text>Name</Text>
        <View style={styles.textinput}>
          <TextInput
            onChangeText={this._handleChangeName}
            style={styles.textinput} placeholder='Name...'
            onSubmitEditing= {() => this._create(this.name)}
          />
        </View>
        <Text>Message</Text>
        <View style={styles.textinput}>
          <TextInput
            onChangeText={this._handleChangeMessage}
            style={styles.textinput} placeholder='Message...'
            onSubmitEditing= {() => this._create(this.message)}
          />
        </View>
        <Button 
          title='Create' onPress={() => this._create() }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex : 1,
    marginTop : 50
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: 'gray',
    borderWidth: 0,
    paddingLeft: 5
  },
  loading : {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 200,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const mapDispatchToProps = (dispatch) => {

  return {
      create: (message) => dispatch(createMessage(message)),
  }
};

export default connect(null, mapDispatchToProps)(Create);