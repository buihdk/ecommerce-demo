import React, { Suspense } from 'react';
import { MemoryRouter } from 'react-router';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';

import Routes from '.';

jest.spyOn(require('../services'), 'fetchItems').mockResolvedValue(
  new Promise(resolve => {
    resolve({ data: [] });
  }),
);
jest.spyOn(require('../services'), 'fetchItemById').mockResolvedValue(
  new Promise(resolve => {
    resolve({ category_id: 1 });
  }),
);

describe('Routes', () => {
  test('renders ItemListPage without crashing', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <Suspense fallback={<div>loading...</div>}>
          <Routes />
        </Suspense>
      </MemoryRouter>,
    );

    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  test('renders ItemDetailPage without crashing', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/items/1']}>
        <Suspense fallback={<div>loading...</div>}>
          <Routes />
        </Suspense>
      </MemoryRouter>,
    );

    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  test('renders NotFoundPage without crashing', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/404']}>
        <Suspense fallback={<div>loading...</div>}>
          <Routes />
        </Suspense>
      </MemoryRouter>,
    );

    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
