/*
  Author: Nirodha Perera
  Date: 17/09/2019

  Defines stories for PostItem component
*/

import React from "react";
import { storiesOf } from "@storybook/react-native";
import PostItem from './';

storiesOf("PostItem", module)
  .add("default view", () => (
    <PostItem
      userName={"test user name"}
      title={"test title"}
      onPress={() => console.log("action: PostItem on refresh")}
    />
  ));