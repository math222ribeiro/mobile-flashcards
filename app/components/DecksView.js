import React, {Component} from 'react';
import {connect} from 'react-redux';
import {FlatList, StyleSheet, View} from 'react-native';
import {List, ListItem, SearchBar} from 'react-native-elements';
import {Ionicons} from '@expo/vector-icons';
import {decksLoaded} from "../actions/actions";
import {fetchDecks} from "../utils/api";
import {setLocalNotification} from "../utils/localNotifications";

class DecksView extends Component {
  static navigationOptions = {
    tabBarLabel: 'My Decks',
    title: 'My Decks',
    tabBarIcon: ({tintColor, focused}) => <Ionicons name={focused ? 'ios-albums' : 'ios-albums-outline'} size={30} color={tintColor}/>
  };

  state = {
    searchBarValue: ''
  };

  componentDidMount() {
    fetchDecks()
      .then(decks => {
        this.props.loadDecks(decks)
      });

    setLocalNotification();
  }

  renderSearchBar = () => (
    <SearchBar
      lightTheme
      placeholder="Search for deck"
      inputStyle={{color: 'black'}}
      onChangeText={(searchBarValue) => this.setState({searchBarValue})}
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
        onPress={() => this.showItemDetail(deck)}
      />
    )
  };

  showItemDetail(deck) {
    this.props.navigation.navigate('ShowDeckView', {deck})
  }

  render() {
    const {decks} = this.props;
    const {searchBarValue} = this.state;
    decks.sort((a, b) => a.title > b.title);
    return (

      <View>

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
