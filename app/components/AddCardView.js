import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {FormInput, Button} from 'react-native-elements';
import {NavigationActions} from 'react-navigation';
import {connect} from 'react-redux';
import {addCard} from "../actions/actions";

class AddCardView extends Component {
  static navigationOptions = ({navigation}) => ({
    headerTitle: 'Add Card',
    headerStyle: {
      backgroundColor: '#000',
    },
    headerTitleStyle: {
      color: '#FFF'
    },
    headerTintColor: '#FFF'
  });

  state = {
    question: '',
    answer: ''
  };

  createCard = () => {
    const {question, answer} = this.state;
    const {deck, key} = this.props.navigation.state.params.info;
    if (question !== '' && answer !== '') {
      deck.questions.push({
        question,
        answer
      });

      this.props.addCard(deck);

      this.props.navigation.dispatch(NavigationActions.setParams({
        params: { deck },
        key: key,
      }));

      this.props.navigation.goBack();
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <FormInput
            value={this.state.question}
            onChangeText={(input) => this.setState({question: input})}
            placeholder="Question"
            inputStyle={styles.input}
          />
          <FormInput
            value={this.state.answer}
            onChangeText={(input) => this.setState({answer: input})}
            placeholder="Answer"
            inputStyle={styles.input}
          />
        </View>
        <Button title="Add Card" buttonStyle={styles.button} onPress={this.createCard}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    marginBottom: 30,
    backgroundColor: '#000',
    borderRadius: 2,
    borderWidth: 1
  },
  container: {
    flex: 1,
    justifyContent: 'space-between'
  },
  input: {
    fontSize: 22,
    marginTop: 25
  }
});
function mapDispatchToProps(dispatch) {
  return {
    addCard: (deck) => dispatch(addCard(deck))
  }
}
export default connect(null, mapDispatchToProps)(AddCardView);