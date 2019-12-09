import { apiServerUrl, fetchItems, fetchItemById, fetchCategories } from '.';

beforeEach(() => {
  fetch.resetMocks();
});

describe('service fetchItems', () => {
  test('should return data', () => {
    fetch.mockResolvedValueOnce(
      Promise.resolve({ json: () => ({ data: ['mock data'] }) }),
    );

    fetchItems().then(res => expect(res).toEqual({ data: ['mock data'] }));
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toBeCalledWith(`${apiServerUrl}/items`);
  });

  test('should return error', () => {
    fetch.mockResolvedValueOnce(Promise.reject(new Error('mock error')));
    fetchItems().then(err =>
      expect(err).toEqual({
        err:
          'Fetch problem: Error: mock error items. Please check console and API server.',
      }),
    );
    expect(global.fetch).toHaveBeenCalledTimes(1);
  });
});

describe('service fetchItemById', () => {
  test('should return data', () => {
    fetch.mockResolvedValueOnce(Promise.resolve({ json: () => ({ item: 0 }) }));

    fetchItemById(0).then(res => expect(res).toEqual({ item: 0 }));
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toBeCalledWith(`${apiServerUrl}/items/0`);
  });

  test('should return error', () => {
    fetch.mockResolvedValueOnce(Promise.reject(new Error('mock error')));
    fetchItemById(0).then(err =>
      expect(err).toEqual({
        err:
          'Fetch problem: Error: mock error item by ID. Please check console and API server.',
      }),
    );
    expect(global.fetch).toHaveBeenCalledTimes(1);
  });
});

describe('service fetchCategories', () => {
  test('should return data', () => {
    fetch.mockResolvedValueOnce(
      Promise.resolve({ json: () => ({ data: ['mock data'] }) }),
    );

    fetchCategories().then(res => expect(res).toEqual({ data: ['mock data'] }));
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toBeCalledWith(`${apiServerUrl}/categories`);
  });

  test('should return error', () => {
    fetch.mockResolvedValueOnce(Promise.reject(new Error('mock error')));
    fetchCategories().then(err =>
      expect(err).toEqual({
        err:
          'Fetch problem: Error: mock error categories. Please check console and API server.',
      }),
    );
    expect(global.fetch).toHaveBeenCalledTimes(1);
  });
});
