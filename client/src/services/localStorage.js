const CATEGORIES = '_CATEGORIES_';

export const fetchCategories = () => {
  import('./index').then(async module => {
    if (module.default) {
      const res = await module.default.fetchCategories();
      window.localStorage.setItem(CATEGORIES, JSON.stringify(res.data || []));
    }
  });
};

export const getCategories = () =>
  JSON.parse(window.localStorage.getItem(CATEGORIES)) || [];
