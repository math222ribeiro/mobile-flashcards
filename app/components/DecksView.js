import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

class DecksView extends Component {
  static navigationOptions = {
    tabBarLabel: 'My Decks',
    tabBarIcon: ({ tintColor, focused }) => <Ionicons name={focused ? 'ios-albums' : 'ios-albums-outline'} size={30} color={tintColor} />
  };

  render() {
    return (
      <View>
        <Text>DECK VIEW</Text>
      </View>
    )
  }
}

export default DecksView;
