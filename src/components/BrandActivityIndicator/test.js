/*
  Author: Nirodha Perera
  Date: 17/09/2019

  Defines tests for BrandActivityIndicator component
*/
import React from 'react';
import BrandActivityIndicator from './'
import renderer from 'react-test-renderer';

describe('BrandActivityIndicator Component', () => {

  it('BrandActivityIndicator component renders correctly', () => {
    const component = renderer.create(
      <BrandActivityIndicator loading={true} />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
