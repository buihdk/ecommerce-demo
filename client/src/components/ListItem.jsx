import React, { memo } from 'react';
import PropTypes from 'prop-types';

import Item from './Item';

const ListItem = ({ items }) => (
  <div>{items && items.map(item => <Item key={item.id} item={item} />)}</div>
);

ListItem.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};

ListItem.defaultProps = {
  items: [],
};

export default memo(ListItem);
