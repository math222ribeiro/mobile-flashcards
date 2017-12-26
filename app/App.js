import React from 'react';
import {StyleSheet, View, Platform, StatusBar} from 'react-native';
import {TabNavigator, StackNavigator} from 'react-navigation';
import DecksView from './components/DecksView';
import NewDeckView from './components/NewDeckView';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from "./reducers/reducers";
import ShowDeckView from './components/ShowDeckView';
import {Constants} from 'expo';

const Tabs = TabNavigator({
    Decks: {
      screen: DecksView,
      path: '/'
    },
    NewDeck: {
      screen: NewDeckView,
      path: '/newDeck'
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

const Stack = StackNavigator({
    Home: {
      screen: Tabs,
      navigationOptions: ({navigation, tabBarLabel}) => ({
        header: Platform.OS === 'ios' ? navigation.header : null,
        headerStyle: {
          backgroundColor: '#000',
        },
        headerTitleStyle: {
          color: '#FFF'
        }
      })
    },
    ShowDeckView: {
      screen: ShowDeckView,
      path: 'deck/:deck',
    }
  },
  {
    headerMode: Platform.OS === 'ios' ? 'float' : 'screen'
  }
);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={styles.container}>
          <StatusBar barStyle='light-content'/>
          {Platform.OS !== 'ios' && <View style={{height: Constants.statusBarHeight, backgroundColor: 'black'}} />}
          <Stack/>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
