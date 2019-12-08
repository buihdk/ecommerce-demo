const apiServerUrl = 'http://localhost:5000';

export const fetchItems = () =>
  fetch(`${apiServerUrl}/items`)
    .then(res => res.json())
    .catch(err => ({
      err: `Fetch problem: ${err} items. Please check console and API server.`,
    }));

export const fetchItemById = id =>
  fetch(`${apiServerUrl}/items/${id}`)
    .then(res => res.json())
    .catch(err => ({
      err: `Fetch problem: ${err} item by ID. Please check console and API server.`,
    }));

export const fetchCategories = () =>
  fetch(`${apiServerUrl}/categories`)
    .then(res => res.json())
    .catch(err => ({
      err: `Fetch problem: ${err} categories. Please check console and API server.`,
    }));
