import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { renderHook } from '@testing-library/react-hooks';

import ItemList, { useHistoryPush } from './ItemList';

const mockHistory = { push: jest.fn() };
jest.mock('react-router-dom', () => ({ useHistory: () => mockHistory }));

const mockItems = [
  {
    id: '1',
    image: '1',
    name: 'item 1',
    description: 'description 1',
    price: 10,
    like_count: 2,
    is_sold_out: false,
  },
  {
    id: '2',
    image: '2',
    name: 'item 2',
    description: 'description 2',
    price: 20,
    like_count: 0,
    is_sold_out: true,
  },
];

describe(`useHistoryPush`, () => {
  test(`works correctly`, () => {
    const {
      result: { current: handleClick },
    } = renderHook(() => useHistoryPush(mockHistory));
    handleClick('0');

    expect(mockHistory.push).toBeCalledWith('items/0');
  });
});

describe('ItemList', () => {
  const wrapper = shallow(<ItemList items={mockItems} />);

  test('renders without crashing', () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  test('goes to Item Detail page when View button is clicked ', () => {
    wrapper
      .find('WithStyles(ForwardRef(ButtonBase))')
      .first()
      .simulate('click');

    expect(mockHistory.push).toBeCalledWith('items/1');
  });
});
