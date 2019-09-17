/*
  Author: Nirodha Perera
  Date: 17/09/2019

  Defines tests for ListView component
*/
import React from 'react';
import ListView from './'
import renderer from 'react-test-renderer';
import { Text } from 'react-native';
const clickFn = jest.fn();

describe('ListView Component', () => {

  it('ListView component renders correctly', () => {
    const component = renderer.create(
      <ListView
        listData={[{
          id: 1,
          title: 'test title',
          body: 'test body',
          user: 'test user'
        }]}
        renderItem={item => <Text>{item.user}</Text>}
        refreshing={false}
        onRefresh={clickFn}
      />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
