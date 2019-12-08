const apiServerUrl = 'http://localhost:5000';

export default {
  fetchItems: () =>
    fetch(`${apiServerUrl}/items`)
      .then(res => res.json())
      .catch(err => ({
        err: `Fetch problem: ${err}. Please check console and API server.`,
      })),

  fetchItemById: id =>
    fetch(`${apiServerUrl}/items/${id}`)
      .then(res => res.json())
      .catch(err => ({
        err: `Fetch problem: ${err}. Please check console and API server.`,
      })),

  fetchCategories: () =>
    fetch(`${apiServerUrl}/categories`)
      .then(res => res.json())
      .catch(err => ({
        err: `Fetch problem: ${err}. Please check console and API server.`,
      })),
};
