import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';

import api from '../services';
import Item from './Item';

const ListItem = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    api.fetchItems().then(res => setItems(res.data.slice(0, 5))); // get only 5 items
  }, []);

  return (
    <div>{items && items.map(item => <Item key={item.id} {...item} />)}</div>
  );
};

ListItem.propTypes = {};

export default ListItem;
