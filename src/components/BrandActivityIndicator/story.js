/*
  Author: Nirodha Perera
  Date: 17/09/2019

  Defines stories for BrandActivityIndicator component
*/

import React from "react";
import { storiesOf } from "@storybook/react-native";
import BrandActivityIndicator from './';

storiesOf("BrandActivityIndicator", module)
  .add("default view", () => (
    <BrandActivityIndicator loading={true} />
  ));