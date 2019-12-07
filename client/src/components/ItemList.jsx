import React, { memo } from 'react';
import PropTypes from 'prop-types';

import ItemDetail from './ItemDetail';

const ItemList = ({ items }) => (
  <div>
    {items && items.map(item => <ItemDetail key={item.id} item={item} />)}
  </div>
);

ItemList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};

ItemList.defaultProps = {
  items: [],
};

export default memo(ItemList);
