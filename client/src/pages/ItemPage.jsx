import React, { memo, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import api from '../services';
import Item from '../components/Item';

const ItemPage = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});

  useEffect(() => {
    api.fetchItemById(id).then(res => setItem(res));
  }, [id]);

  return <Item item={item} />;
};

export default memo(ItemPage);
