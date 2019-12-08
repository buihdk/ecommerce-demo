import React, { memo, useState, useEffect } from 'react';

import api from '../services';
import ItemList from '../components/ItemList';
import ErrorBar from '../utils/ErrorBar';

const ItemListPage = () => {
  const [response, setResponse] = useState({});

  useEffect(() => {
    api.fetchItems().then(res => setResponse(res));
  }, []);

  if (response.err) return <ErrorBar msg={response.err} />;
  return <ItemList items={response.data} />;
};

export default memo(ItemListPage);
