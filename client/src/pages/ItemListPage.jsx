import React, { memo, useState, useEffect } from 'react';

import api from '../services';
import ItemList from '../components/ItemList';

const ItemListPage = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    api.fetchItems().then(res => setItems(res.data.slice(0, 5))); // get only 5 items
  }, []);

  return <ItemList items={items} />;
};

export default memo(ItemListPage);
