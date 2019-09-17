/*
  Author: Nirodha Perera
  Date: 16/09/2019

  Defines styles for PostItem component
*/

import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({

  container: {
    flex: 1,
    paddingTop: 10,
    padding: 24,
    backgroundColor: '#ecf0f1'
  },
  box: {
    borderRadius: 8,
    padding: 24,
    backgroundColor: 'white',
    width: '100%'
  },
  shadow: {
    elevation: 5,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 4
  }

});