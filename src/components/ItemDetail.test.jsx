import React, { Suspense } from 'react';
import { shallow, mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { renderHook } from '@testing-library/react-hooks';

import ItemDetail, { useHistoryPush } from './ItemDetail';

const mockHistory = { push: jest.fn() };
jest.mock('react-router-dom', () => ({ useHistory: () => mockHistory }));

const item = {
  id: '1',
  image: '1',
  name: 'item 1',
  description: 'description 1',
  shipping_fee: 'free',
  price: 10,
  like_count: 2,
  comment_count: 3,
  is_sold_out: false,
};

const newItem = {
  ...item,
  image: '',
};

describe(`useHistoryPush`, () => {
  test(`works correctly`, () => {
    const {
      result: { current: handleClick },
    } = renderHook(() => useHistoryPush(mockHistory));
    handleClick();

    expect(mockHistory.push).toBeCalledWith('/');
  });
});

describe('ItemDetail', () => {
  test('renders null item without crashing', () => {
    const wrapper = mount(
      <Suspense fallback={<div>loading...</div>}>
        <ItemDetail item={null} />
      </Suspense>,
    );

    expect(wrapper).toMatchSnapshot();
  });

  test('renders valid item without crashing', () => {
    const wrapper = shallow(<ItemDetail item={item} categoryName="men" />);

    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  test('renders item with no image without crashing', () => {
    const wrapper = shallow(<ItemDetail item={newItem} categoryName="baby" />);

    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
