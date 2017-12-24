import React from 'react';
import {View, StatusBar} from 'react-native';
import {Constants} from 'expo';

const AppStatusBar = () => {
  return (
    <View style={{height: Constants.statusBarHeight}}>
      <StatusBar />
    </View>
  )
};

export default AppStatusBar;