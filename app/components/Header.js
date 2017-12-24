import React, {Component} from 'react'
import {View, Text, StyleSheet, Platform} from 'react-native';

const Header = (props) => {
  return (
    Platform.OS === 'ios' && (
      <View style={styles.header}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
    )
  )
};

const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#000',
  },
  title: {
    fontSize: 20,
    color: '#FFF'
  }
});

export default Header;