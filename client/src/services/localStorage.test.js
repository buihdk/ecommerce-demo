import { CATEGORIES, fetchCategories, getCategories } from './localStorage';

describe('localStorage', () => {
  describe('getCategories', () => {
    test('fetchCategories should work', done => {
      const setItemSpy = jest.spyOn(Storage.prototype, 'setItem');
      fetchCategories();

      setTimeout(() => {
        expect(setItemSpy).toBeCalledWith(CATEGORIES, '[]');
        done();
      }, 0);
    });
  });

  describe('getCategories', () => {
    test('when JSON.parse returns null', () => {
      JSON.parse = jest.fn().mockResolvedValueOnce(null);

      getCategories().then(data => expect(data).toEqual(null));
    });

    test('getCategories is called with CATEGORIES', () => {
      const getItemSpy = jest.spyOn(Storage.prototype, 'getItem');
      getCategories();

      expect(getItemSpy).toBeCalledWith(CATEGORIES);
    });
  });
});
