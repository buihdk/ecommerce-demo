import React, { memo, useMemo, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { get, find } from 'lodash';

import api from '../services';
import { getCategories } from '../services/localStorage';
import ItemDetail from '../components/ItemDetail';

const ItemDetailPage = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});

  useEffect(() => {
    api.fetchItemById(id).then(res => setItem(res));
  }, [id]);

  const categories = useMemo(() => getCategories(), []);
  const categoryName = get(
    find(categories, category => Number(category.id) === item.category_id),
    'name',
    '',
  );

  return <ItemDetail item={item} categoryName={categoryName} />;
};

export default memo(ItemDetailPage);
