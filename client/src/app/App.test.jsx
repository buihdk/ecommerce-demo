import React from 'react';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';

import * as LocalStorage from '../services/localStorage';
import App from './App';

const fetchCategories = jest
  .spyOn(LocalStorage, 'fetchCategories')
  .mockResolvedValue({ data: ['mock'] });

describe('App', () => {
  const wrapper = mount(<App />);

  test('renders without crashing', () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
    expect(fetchCategories).toHaveBeenCalled();
  });
});
