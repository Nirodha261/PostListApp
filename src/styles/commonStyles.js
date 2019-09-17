/*
  Author: Nirodha Perera
  Date: 16/09/2019

  Common styles for application components
*/
import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
    boldText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    standardText: {
        fontSize: 15
    },
    centerContent: {
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    justifyText: {
        textAlign: 'justify'
    }
});