import React, {Component} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {List, ListItem, SearchBar} from 'react-native-elements';

class DecksView extends Component {
  static navigationOptions = {
    tabBarLabel: 'My Decks',
    tabBarIcon: ({tintColor, focused}) => <Ionicons name={focused ? 'ios-albums' : 'ios-albums-outline'} size={30} color={tintColor}/>
  };

  state = {
    decks: [{name: "React-Redux", cardsCount: 3}, {name: "React Native", cardsCount: 5}, {
      name: "Java",
      cardsCount: 1
    }, {name: "Swift", cardsCount: 5}]
  };

  renderSearchBar = () => (
    <SearchBar lightTheme placeholder="Search for deck" inputStyle={{color: 'black'}}/>
  );

  render() {
    return (
      <List containerStyle={{marginTop: 0, borderTopWidth: 0}}>
        <FlatList
          ListHeaderComponent={this.renderSearchBar}
          data={this.state.decks}
          renderItem={({item}) =>
            <ListItem
              title={item.name}
              subtitle={`${item.cardsCount} cards`}
              titleStyle={styles.title}
              subtitleStyle={styles.subtitle}
            />}
          keyExtractor={(item) => item.name}
        />
      </List>
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

export default DecksView;
