import React, { memo, useState, useEffect } from 'react';

import api from '../services';
import ErrorBar from '../utils/ErrorBar';

import ItemList from '../components/ItemList';

const ItemListPage = () => {
  const [res, setRes] = useState({});

  useEffect(() => {
    api.fetchItems().then(resolved => setRes(resolved));
  }, []);

  if (res && res.err) return <ErrorBar msg={res.err} />;
  return <ItemList items={res.data} />;
};

export default memo(ItemListPage);
