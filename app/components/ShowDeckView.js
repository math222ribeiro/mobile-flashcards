import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';

class ShowDeckView extends Component {
  static navigationOptions = ({navigation}) => ({
    headerTitle: navigation.state.params.deck.title,
    headerStyle: {
      backgroundColor: '#000',
    },
    headerTitleStyle: {
      color: '#FFF'
    },
    headerTintColor: '#FFF'
  });

  goToAddCardView = () => {
    this.props.navigation.navigate('AddCardView', {info: {
      deck: this.props.navigation.state.params.deck,
      key: this.props.navigation.state.key
    }});
  };

  goToQuizView = () => {
    this.props.navigation.navigate('QuizView', {deck: this.props.navigation.state.params.deck})
  };

  render() {
    const {deck} = this.props.navigation.state.params;
    return (
      <View style={styles.infoContainer}>
        <View/>
        <Text style={{textAlign: 'center'}}>
          <Text style={styles.deckTitle}>{deck.title}{'\n'}</Text>
          <Text style={styles.cardNumber}>{deck.questions.length + ' cards'}</Text>
        </Text>
        <View style={{alignSelf: 'stretch'}}>
          <Button title="Add Card" buttonStyle={styles.addButton} color='#000' onPress={this.goToAddCardView}/>
          <Button title="Start Quiz" buttonStyle={styles.startButton} color='#fff' onPress={this.goToQuizView}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  addButton: {
    backgroundColor: '#fff',
    borderRadius: 2,
    borderColor: '#000',
    borderWidth: 1,
    marginBottom: 20
  },
  startButton: {
    backgroundColor: '#000',
    borderRadius: 2,
    borderColor: '#000',
    borderWidth: 1,
    marginBottom: 30
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  deckTitle: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  cardNumber: {
    fontSize: 22,
    color: '#555'
  }
});
export default ShowDeckView;