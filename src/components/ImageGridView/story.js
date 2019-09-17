/*
  Author: Nirodha Perera
  Date: 17/09/2019

  Defines stories for ImageGridView component
*/
import React from "react";
import { storiesOf } from "@storybook/react-native";
import ImageGridView from './';

storiesOf("ImageGridView", module)
  .add("default view", () => (
    <ImageGridView
      onItemPress={() => console.log("action: ImageGridView item pressed")}
      images={[{
        albumId: 1,
        id: 1,
        title: "accusamus beatae ad facilis cum similique qui sunt",
        url: "https://via.placeholder.com/600/92c952",
        thumbnailUrl: "https://via.placeholder.com/150/92c952"
      }]}
    />
  ));