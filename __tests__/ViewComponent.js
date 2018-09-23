import React from 'react';
import ViewComponent from '../ViewComponent';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<ViewComponent/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});