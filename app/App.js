import React from 'react';
import { StyleSheet, View } from 'react-native';
import {TabNavigator} from 'react-navigation';
import AppStatusBar from './components/AppStatusBar';
import DecksView from './components/DecksView';
import NewDeckView from './components/NewDeckView';

const Tabs = TabNavigator({
  Decks: {
    screen: DecksView,
  },
  NewDeck: {
    screen: NewDeckView,
  },
},
  {
    animationEnabled: true,
    swipeEnabled: true
  }
);

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppStatusBar/>
        <Tabs />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
