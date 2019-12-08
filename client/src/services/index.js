const apiServerUrl = 'http://localhost:5000';

export default {
  fetchItems: () =>
    fetch(`${apiServerUrl}/items`)
      .then(res => res.json())
      .catch(err => console.log(`Fetch problem: ${err}`)),

  fetchItemById: id =>
    fetch(`${apiServerUrl}/items/${id}`)
      .then(res => res.json())
      .catch(err => console.log(`Fetch problem: ${err}`)),

  fetchCategories: () =>
    fetch(`${apiServerUrl}/categories`)
      .then(res => res.json())
      .catch(err => console.log(`Fetch problem: ${err}`)),
};
