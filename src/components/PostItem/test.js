/*
  Author: Nirodha Perera
  Date: 17/09/2019

  Defines tests for PostItem component
*/
import React from 'react';
import PostItem from './'
import renderer from 'react-test-renderer';
const clickFn = jest.fn();

describe('PostItem Component', () => {

  it('PostItem component renders correctly', () => {
    const component = renderer.create(
      <PostItem
        userName={"test user name"}
        title={"test title"}
        onPress={clickFn}
      />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
