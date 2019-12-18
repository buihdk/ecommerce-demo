import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import ErrorBoundary from './ErrorBoundary';

describe('ErrorBoundary', () => {
  describe('no error', () => {
    test('renders without crashing', () => {
      const wrapper = shallow(
        <ErrorBoundary fallback={<h2>App crashed.</h2>}>
          <div>Children</div>
        </ErrorBoundary>,
      );

      expect(toJSON(wrapper)).toMatchSnapshot();
    });
  });

  describe('with errors', () => {
    const wrapper = shallow(
      <ErrorBoundary fallback={<h2>App crashed.</h2>}>
        <div>Children</div>
      </ErrorBoundary>,
    );
    test('renders without crashing', () => {
      wrapper.setState({ hasError: true });

      expect(toJSON(wrapper)).toMatchSnapshot();
    });

    test('getDerivedStateFromError returns correct object', () => {
      const result = wrapper
        .instance()
        .constructor.getDerivedStateFromError('error!');
      expect(result).toEqual({ hasError: true, error: 'error!' });
    });
  });
});
