const url = 'http://localhost:5000';

export default {
  fetchItems: () =>
    fetch(`${url}/items`)
      .then(res => res.json())
      .catch(err => console.log(`Fetch problem: ${err}`)),

  fetchItemById: id =>
    fetch(`${url}/items/${id}`)
      .then(res => res.json())
      .catch(err => console.log(`Fetch problem: ${err}`)),

  fetchCategories: () =>
    fetch(`${url}/categories`)
      .then(res => res.json())
      .catch(err => console.log(`Fetch problem: ${err}`)),
};
