import { get } from 'lodash';

const CATEGORIES = '_CATEGORIES_';

export const fetchCategories = () => {
  import('./index').then(async module => {
    if (module && module.fetchCategories) {
      const res = await module.fetchCategories();
      window.localStorage.setItem(
        CATEGORIES,
        JSON.stringify(get(res, 'data', [])),
      );
    }
  });
};

export const getCategories = () =>
  JSON.parse(window.localStorage.getItem(CATEGORIES)) || [];
