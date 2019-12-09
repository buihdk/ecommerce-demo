import React from 'react';
import { act } from 'react-dom/test-utils';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { renderHook } from '@testing-library/react-hooks';

import ItemListPage, { useFetchItems } from './ItemListPage';

const setRes = jest.fn();
const fetchItemsSpy = jest.spyOn(require('../services'), 'fetchItems');

describe('ItemListPage', () => {
  let wrapper;

  beforeEach(() => {
    fetchItemsSpy.mockReset();
  });
  test(`useFetchItems returns data`, async () => {
    fetchItemsSpy.mockImplementation(
      () =>
        new Promise(resolve => {
          resolve({ data: [] });
        }),
    );
    await renderHook(() => useFetchItems(setRes));
    await act(async () => {
      wrapper = shallow(<ItemListPage />);
    });

    expect(fetchItemsSpy).toBeCalled();
    expect(setRes).toBeCalledWith({ data: [] });
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  test(`useFetchItems returns error`, async () => {
    fetchItemsSpy.mockImplementation(
      () =>
        new Promise(reject => {
          reject({ err: 'Error!' });
        }),
    );
    await renderHook(() => useFetchItems(setRes));
    await act(async () => {
      wrapper = shallow(<ItemListPage />);
    });

    expect(fetchItemsSpy).toBeCalled();
    expect(setRes).toBeCalledWith({ err: 'Error!' });
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
