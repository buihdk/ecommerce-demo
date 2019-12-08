import React, { memo, useState, useEffect } from 'react';

import api from '../services';
import ItemList from '../components/ItemList';

const ItemListPage = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    api.fetchItems().then(res => setItems(res.data));
  }, []);

  return <ItemList items={items} />;
};

export default memo(ItemListPage);
