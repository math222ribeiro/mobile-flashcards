import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import {TabNavigator} from 'react-navigation';
import AppStatusBar from './components/AppStatusBar';
import DecksView from './components/DecksView';
import NewDeckView from './components/NewDeckView';
import Header from "./components/Header";

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
    swipeEnabled: true,
    tabBarOptions: {
      activeTintColor: Platform.OS === 'ios' ? '#000' : '#FFF',
      style: Platform.OS === 'ios' ? {} : {backgroundColor: '#000'}
    },
  }
);

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppStatusBar/>
        {Platform.OS === 'ios' && (<Header title="My Decks"/>)}
        <Tabs />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});
