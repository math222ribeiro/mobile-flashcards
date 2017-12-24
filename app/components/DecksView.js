import React, {Component} from 'react';
import {connect} from 'react-redux';
import {FlatList, StyleSheet, View} from 'react-native';
import {List, ListItem, SearchBar} from 'react-native-elements';
import {Ionicons} from '@expo/vector-icons';
import Header from "./Header";
import {decksLoaded} from "../actions/actions";

class DecksView extends Component {
  static navigationOptions = {
    tabBarLabel: 'My Decks',
    tabBarIcon: ({tintColor, focused}) => <Ionicons name={focused ? 'ios-albums' : 'ios-albums-outline'} size={30}
                                                    color={tintColor}/>
  };

  state = {
    searchBarValue: ''
  };

  componentDidMount() {
    this.props.loadDecks([
      {
        title: 'React',
        questions: [
          {
            question: 'What is React?',
            answer: 'A library for managing user interfaces'
          },
          {
            question: 'Where do you make Ajax requests in React?',
            answer: 'The componentDidMount lifecycle event'
          }
        ]
      },

      {
        title: 'JavaScript',
        questions: [
          {
            question: 'What is a closure?',
            answer: 'The combination of a function and the lexical environment within which that function was declared.'
          }
        ]
      }
    ])
  }

  renderSearchBar = () => (
    <SearchBar
      lightTheme
      placeholder="Search for deck"
      inputStyle={{color: 'black'}}
      onChangeText={(searchBarValue) => this.setState({searchBarValue})}
      onClearText={() => console.log('clear')}
      value={this.state.searchBarValue}
    />
  );

  renderListItem = (object) => {
    const deck = object.item;
    return (
      <ListItem
      title={deck.title}
      subtitle={`${deck.questions.length} cards`}
      titleStyle={styles.title}
      subtitleStyle={styles.subtitle}
      />
    )
  };

  render() {
    const {decks} = this.props;
    const {searchBarValue} = this.state;

    return (
      <View>
        <Header title="My Decks"/>
        <List containerStyle={{marginTop: 0, borderTopWidth: 0}} key={1}>
          <FlatList
            ListHeaderComponent={this.renderSearchBar}
            data={
              searchBarValue !== '' ?
                decks.filter(deck => deck.title.toUpperCase().includes(searchBarValue.toUpperCase())) :
                decks
            }
            renderItem={this.renderListItem}
            keyExtractor={(i) => i.title}
          />
        </List>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
  },
  subtitle: {
    fontSize: 16,
  },
});

function mapDispatchToProps(dispatch) {
  return {
    loadDecks: (decks) => dispatch(decksLoaded(decks)),
  }
}

function mapStateToProps({decks}) {
  return {
    decks
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DecksView);
