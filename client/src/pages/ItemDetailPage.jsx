import React, { memo, useMemo, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { get, find } from 'lodash';

import api from '../services';
import { getCategories } from '../services/localStorage';
import ErrorBar from '../utils/ErrorBar';

import ItemDetail from '../components/ItemDetail';

const ItemDetailPage = () => {
  const { id } = useParams();
  const [response, setResponse] = useState({});

  useEffect(() => {
    api.fetchItemById(id).then(res => setResponse(res));
  }, [id]);

  const categories = useMemo(() => getCategories(), []);
  const categoryName = get(
    find(categories, category => Number(category.id) === response.category_id),
    'name',
    '',
  );

  if (response.err) return <ErrorBar msg={response.err} />;
  return <ItemDetail item={response} categoryName={categoryName} />;
};

export default memo(ItemDetailPage);
