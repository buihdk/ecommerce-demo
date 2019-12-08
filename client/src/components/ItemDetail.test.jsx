import React, { Suspense } from 'react';
import { render } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { create } from 'react-test-renderer';
import ItemDetail from './ItemDetail';

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

describe('ItemDetail', () => {
  test('renders null item without crashing', () => {
    const wrapper = create(
      <Suspense fallback={<div>loading...</div>}>
        <ItemDetail item={null} />
      </Suspense>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('renders valid item without crashing', () => {
    const wrapper = render(<ItemDetail item={item} categoryName="men" />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
