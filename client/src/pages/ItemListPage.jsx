import React, { memo, useState, useEffect } from 'react';

import { fetchItems } from '../services';
import ErrorBar from '../utils/ErrorBar';

import ItemList from '../components/ItemList';

export const useFetchItems = setRes =>
  useEffect(() => {
    fetchItems().then(response => setRes(response));
  }, []);

const ItemListPage = () => {
  const [res, setRes] = useState({});

  useFetchItems(setRes);
  // useEffect(() => {
  //   fetchItems().then(resolved => setRes(resolved));
  // }, []);

  if (res && res.err) return <ErrorBar msg={res.err} />;
  return <ItemList items={res.data} />;
};

export default memo(ItemListPage);
