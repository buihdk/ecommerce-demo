import React, { memo, useState, useEffect } from 'react';

import api from '../services';
import ListItem from '../components/ListItem';

const ListItemPage = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    api.fetchItems().then(res => setItems(res.data.slice(0, 5))); // get only 5 items
  }, []);

  return <ListItem items={items} />;
};

export default memo(ListItemPage);
