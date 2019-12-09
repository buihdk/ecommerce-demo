import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import NotFoundPage from './NotFoundPage';

const mockHistory = { push: jest.fn() };
jest.mock('react-router-dom', () => ({ useHistory: () => mockHistory }));

describe('NotFoundPage', () => {
  test('renders 404 without crashing', () => {
    const wrapper = shallow(<NotFoundPage errorCode={404} />);

    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  test('renders 400 without crashing', () => {
    const wrapper = shallow(<NotFoundPage errorCode={400} />);

    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  test('renders bad request without crashing', () => {
    const wrapper = shallow(<NotFoundPage />);

    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  test('goes to homepage when button is clicked ', () => {
    const wrapper = shallow(<NotFoundPage />);
    wrapper.find('WithStyles(ForwardRef(Button))').simulate('click');

    expect(mockHistory.push).toBeCalledWith('/');
  });
});
