import React, { memo, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '@material-ui/core';

import api from '../services';
import ItemDetail from '../components/ItemDetail';

const ItemDetailPage = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});

  useEffect(() => {
    api.fetchItemById(id).then(res => setItem(res));
  }, [id]);

  return (
    <Container maxWidth="sm">
      <ItemDetail item={item} />
    </Container>
  );
};

export default memo(ItemDetailPage);
