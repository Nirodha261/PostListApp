/**
 * Sample React Native App
 * Demonstrates rendering of list of items(posts) and image grid.
 */

import React, { Component } from 'react';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from 'react-redux';
import { store, persistor } from "./src/stores/configureStore";
import {
  Posts,
  PostDetail,
  PostImage
} from "./src/screens";
import Config from "react-native-config";
import dotenvParseVariables from 'dotenv-parse-variables';
import StorybookUI from './storybook';

const AppNavigator = createStackNavigator({
  Posts,
  PostDetail,
  PostImage
},
  {
    initialRouteName: "Posts",
    defaultNavigationOptions: {
      headerTitleStyle: {
        flex: 1,
        fontWeight: 'bold',
        textAlign: 'center',
      }
    },
  });

const ENV = dotenvParseVariables({ IS_STORYBOOK: Config.IS_STORYBOOK });

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {

  render() {

    if (!ENV.IS_STORYBOOK) {
      return (
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <AppContainer />
          </PersistGate>
        </Provider>
      )
    } else {
      return <StorybookUI />
    }
  }
}