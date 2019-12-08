import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import ItemDetail from './ItemDetail';

describe('ItemDetail', () => {
  const wrapper = shallow(<ItemDetail />);

  test('renders without crashing', () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
