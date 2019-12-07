import React, { memo, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import api from '../services';
import ItemDetail from '../components/ItemDetail';

const ItemDetailPage = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});

  useEffect(() => {
    api.fetchItemById(id).then(res => setItem(res));
  }, [id]);

  return <ItemDetail item={item} isItemPage />;
};

export default memo(ItemDetailPage);
