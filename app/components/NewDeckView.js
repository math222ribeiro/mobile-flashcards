import React, {Component} from 'react';
import {KeyboardAvoidingView, StyleSheet, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {FormInput, FormLabel, Button} from 'react-native-elements';
import {connect} from 'react-redux';
import {newDeck} from "../actions/actions";
import {updateDecks} from "../utils/api";

class NewDeckView extends Component {
  static navigationOptions = {
    tabBarLabel: 'New Deck',
    title: 'New Deck',
    tabBarIcon: ({ tintColor, focused }) => <Ionicons name={focused ? 'ios-add-circle' : 'ios-add-circle-outline'} size={30} color={tintColor} />
  };

  state = {
    input: ''
  };

  createDeck = () => {
    if (this.state.input === '') {
      alert('Invalid Name');
    } else {
      let invalid = false;
      this.props.decks.forEach((deck) => {
        if (deck.title === this.state.input) {
          invalid = true;
        }
      });

      if (invalid) {
        alert('Deck already exists');
      } else {
        const deck = {
          title: this.state.input,
          questions: []
        };
        this.setState({input: ''});
        this.props.addDeck(deck);
        this.props.navigation.navigate('ShowDeckView', {deck});
        updateDecks([...this.props.decks, deck])
      }
    }
  };

  render() {
    return (
      <KeyboardAvoidingView style={{justifyContent: 'space-between', flex:1, flexDirection: 'column'}}>
        <View>
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
        <Button title="Create Deck" buttonStyle={styles.button} onPress={this.createDeck}/>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  label: {
    fontSize: 32,
    marginBottom: 30,
  },
  button: {
    marginBottom: 30,
    backgroundColor: '#000',
    borderRadius: 2,
    borderWidth: 1
  },
  input: {
    fontSize: 22
  }
});

function mapDispatchToProps(dispatch) {
  return {
    addDeck: (deck) => dispatch(newDeck(deck))
  }
}

function mapStateToProps({decks}) {
  return {
    decks
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewDeckView);