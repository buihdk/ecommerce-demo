import React, { Suspense } from 'react';
import { act } from 'react-dom/test-utils';
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
  let wrapper;

  test('renders ItemListPage without crashing', async () => {
    await act(async () => {
      wrapper = await mount(
        <MemoryRouter initialEntries={['/']}>
          <Suspense fallback={<div>loading...</div>}>
            <Routes />
          </Suspense>
        </MemoryRouter>,
      );
    });

    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  test('renders ItemDetailPage without crashing', async () => {
    await act(async () => {
      wrapper = await mount(
        <MemoryRouter initialEntries={['/items/1']}>
          <Suspense fallback={<div>loading...</div>}>
            <Routes />
          </Suspense>
        </MemoryRouter>,
      );
    });

    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  test('renders NotFoundPage without crashing', async () => {
    await act(async () => {
      wrapper = await mount(
        <MemoryRouter initialEntries={['/404']}>
          <Suspense fallback={<div>loading...</div>}>
            <Routes />
          </Suspense>
        </MemoryRouter>,
      );
    });

    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
