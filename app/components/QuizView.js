import React, {Component} from 'react';
import {View, Text, StyleSheet, Animated, Platform} from 'react-native';
import {Button} from 'react-native-elements';
import {Ionicons} from '@expo/vector-icons';

class QuizView extends Component {
  static navigationOptions = ({navigation}) => ({
    headerTitle: 'Quiz',
    headerStyle: {
      backgroundColor: '#000',
    },
    headerTitleStyle: {
      color: '#FFF'
    },
    headerTintColor: '#FFF'
  });

  state = {
    question: 0,
    textOpacity: new Animated.Value(1),
    showing: 'q',
    corrects: 0
  };

  showAnswer = () => {
    Animated.timing(                  // Animate over time
      this.state.textOpacity,            // The animated value to drive
      {
        toValue: 0,                   // Animate to opacity: 1 (opaque)
        duration: 300,              // Make it take a while
      }
    ).start(() => {
      this.setState({
        showing: 'a',
      });

      Animated.timing(                  // Animate over time
        this.state.textOpacity,            // The animated value to drive
        {
          toValue: 1,                   // Animate to opacity: 1 (opaque)
          duration: 300,              // Make it take a while
        }
      ).start()
    });
  };

  answer = (option) => {
    Animated.timing(
      this.state.textOpacity,
      {
        toValue: 0,
        duration: 300,
      }
    ).start(() => {
      this.setState((prevState) => ({
        corrects: prevState.corrects + (option === 'correct' ? 1 : 0),
        showing: 'q',
        question: prevState.question + 1
      }));

      Animated.timing(
        this.state.textOpacity,
        {
          toValue: 1,
          duration: 300,
        }
      ).start()
    })
  };

  restart = () => {
    this.setState({
      question: 0,
      textOpacity: new Animated.Value(1),
      showing: 'q',
      corrects: 0
    })
  };

  render() {
    const {deck} = this.props.navigation.state.params;
    return (
      this.state.question < deck.questions.length ? (
        <View style={styles.container}>
          <Text style={styles.questionCounter}>{this.state.question + 1 + '/' + deck.questions.length}</Text>
          <Animated.Text style={[styles.question, {opacity: this.state.textOpacity}]}>
            {this.state.showing === 'q' ? (deck.questions[this.state.question].question) : (deck.questions[this.state.question].answer)}
          </Animated.Text>

          {this.state.showing === 'q' ? (
            <Button title="Show Answer" buttonStyle={styles.button} onPress={this.showAnswer}/>
          ) : (
            <View>
              <Button title="Correct" buttonStyle={styles.correct} onPress={() => this.answer('correct')}/>
              <Button title="Incorrect" buttonStyle={styles.wrong} onPress={() => this.answer('wrong')}/>
            </View>
          )}
        </View>
      ):(
        <View style={styles.container}>
          <View/>
          <View style={{alignSelf: 'center'}}>
            <Text
              style={[styles.score, {color: this.state.corrects >= (deck.questions.length / 2) ? '#4CAF50' : '#F44336'}]}
            >
              Score: {(this.state.corrects / deck.questions.length).toFixed(2) * 100}%
            </Text>
            <Text style={styles.info}>
              <Ionicons
                name={Platform.OS === 'ios' ? 'ios-checkmark': 'md-checkmark'}
                size={40}
                color={'#4CAF50'}
              />
              {'\n'}Answers Right: {this.state.corrects}
            </Text>
            <Text style={styles.info}>
              <Ionicons
                name={Platform.OS === 'ios' ? 'ios-close': 'md-close'}
                size={40}
                color={'#F44336'}
              />
              {'\n'}Answers Wrong: {deck.questions.length - this.state.corrects}
            </Text>
          </View>
          <View>
            <Button title="Restart" buttonStyle={styles.restart} color={"#000"} onPress={this.restart}/>
            <Button title="Go back to deck" buttonStyle={styles.button} onPress={() => this.props.navigation.goBack()}/>
          </View>
        </View>
      )
     )

  }
}


const styles = StyleSheet.create({
  button: {
    marginBottom: 30,
    backgroundColor: '#000',
    borderRadius: 2,
    borderWidth: 1,
  },
  correct: {
    marginBottom: 20,
    backgroundColor: '#4CAF50'
  },
  wrong: {
    marginBottom: 30,
    backgroundColor: '#F44336'
  },
  restart: {
    backgroundColor: '#fff',
    borderRadius: 2,
    borderColor: '#000',
    borderWidth: 1,
    marginBottom: 20
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  questionCounter: {
    alignSelf: 'flex-start',
    margin: 15,
    fontSize: 16,
    fontWeight: 'bold'
  },
  question: {
    fontSize: 32,
    fontWeight: 'bold',
    alignSelf: 'center',
    textAlign: 'center',
    margin: 20
  },
  score: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 5
  },
  info: {
    color: "#555",
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 20
  }
});

export default QuizView;