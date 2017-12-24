import React, {Component} from 'react';
import {KeyboardAvoidingView, StyleSheet, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {FormInput, FormLabel, Button} from 'react-native-elements';
import Header from './Header';

class NewDeckView extends Component {
  static navigationOptions = {
    tabBarLabel: 'New Deck',
    tabBarIcon: ({ tintColor, focused }) => <Ionicons name={focused ? 'ios-add-circle' : 'ios-add-circle-outline'} size={30} color={tintColor} />
  };

  state = {
    input: ''
  };

  render() {
    return (
      <KeyboardAvoidingView style={{justifyContent: 'space-between', flex:1, flexDirection: 'column'}}>
        <View>
          <Header title="New Deck"/>
          <FormLabel
            labelStyle={styles.label}
          >
            What is the title of your new deck?
          </FormLabel>
          <FormInput
            value={this.state.input}
            onChangeText={(input) => this.setState({input: input})}
            placeholder="Deck name"
            inputStyle={styles.input}
          />
        </View>
        <Button title="Create Deck" buttonStyle={styles.button}/>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  label: {
    fontSize: 32,
    marginBottom: 30
  },
  button: {
    marginBottom: 30,
    backgroundColor: '#000'
  },
  input: {
    fontSize: 22
  }
});
export default NewDeckView;