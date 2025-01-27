import React from 'react';
import { act } from 'react-dom/test-utils';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { renderHook } from '@testing-library/react-hooks';

import ItemDetailPage, { useFetchItemById } from './ItemDetailPage';

const mockParams = { id: 1 };
jest.mock('react-router-dom', () => ({ useParams: () => mockParams }));

const setRes = jest.fn();
const fetchItemByIdSpy = jest.spyOn(require('services'), 'fetchItemById');

describe('ItemDetailPage', () => {
  let wrapper;

  beforeEach(() => {
    fetchItemByIdSpy.mockReset();
  });

  test(`useFetchItems returns data`, async () => {
    fetchItemByIdSpy.mockResolvedValueOnce(
      new Promise(resolve => {
        resolve({ category_id: 1 });
      }),
    );

    await act(async () => {
      await renderHook(() => useFetchItemById(1, setRes));
      wrapper = shallow(<ItemDetailPage />);
    });

    expect(fetchItemByIdSpy).toBeCalled();
    expect(setRes).toBeCalledWith({ category_id: 1 });
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  test(`useFetchItems returns error`, async () => {
    fetchItemByIdSpy.mockResolvedValueOnce(
      new Promise(reject => {
        reject({ err: 'Error!' });
      }),
    );

    await act(async () => {
      await renderHook(() => useFetchItemById(2, setRes));
      wrapper = shallow(<ItemDetailPage />);
    });

    expect(fetchItemByIdSpy).toBeCalled();
    expect(setRes).toBeCalledWith({ err: 'Error!' });
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
