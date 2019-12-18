import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import ErrorBar from './ErrorBar';

describe('ErrorBar', () => {
  test('renders without crashing', () => {
    const wrapper = shallow(<ErrorBar msg="mock message" />);

    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
