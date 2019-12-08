import React, { memo, useMemo, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { get, find } from 'lodash';

import { fetchItemById } from '../services';
import { getCategories } from '../services/localStorage';
import ErrorBar from '../utils/ErrorBar';

import ItemDetail from '../components/ItemDetail';

const ItemDetailPage = () => {
  const { id } = useParams();
  const [res, setRes] = useState({});
  const categories = useMemo(() => getCategories(), []);

  useEffect(() => {
    fetchItemById(id).then(response => setRes(response));
  }, [id]);

  let categoryName;
  if (res && res.category_id) {
    categoryName = get(
      find(categories, category => Number(category.id) === res.category_id),
      'name',
      '',
    );
  }

  if (res && res.err) return <ErrorBar msg={res.err} />;
  return <ItemDetail item={res} categoryName={categoryName} />;
};

export default memo(ItemDetailPage);
