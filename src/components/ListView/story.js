/*
  Author: Nirodha Perera
  Date: 17/09/2019

  Defines stories for ListView component
*/

import React from "react";
import { storiesOf } from "@storybook/react-native";
import ListView from './';
import { Text, View } from 'react-native';
const style = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#F5FCFF',
};

const CenteredView = ({ children }) => <View style={style}>{children}</View>;

storiesOf("ListView", module)
  .add("default view", () => (
    <CenteredView>
      <ListView
        listData={[{
          id: 1,
          title: 'test title',
          body: 'test body',
          user: 'test user'
        }]}
        renderItem={item => <Text>{item.user}</Text>}
        refreshing={false}
        onRefresh={() => console.log("action: ListView on refresh")}
      />
    </CenteredView>
  ));