import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

class NewDeckView extends Component {
  static navigationOptions = {
    tabBarLabel: 'New Deck',
    tabBarIcon: ({ tintColor, focused }) => <Ionicons name={focused ? 'ios-add-circle' : 'ios-add-circle-outline'} size={30} color={tintColor} />
  };

  render() {
    return (
      <View>
        <Text>NEW DECK VIEW </Text>
      </View>
    )
  }
}

export default NewDeckView;