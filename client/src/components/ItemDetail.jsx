import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, CardMedia } from '@material-ui/core';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    position: 'relative',
  },

  media: {
    height: 140,
  },
});

const ItemDetail = ({ item }) => {
  const styles = useStyles();
  if (!item) return <h2>Item does not exist</h2>;

  return (
    <>
      {item.name}
      <CardMedia className={styles.media} image={item.image} />
      {item.name}
      <br />
      {item.like_count}
      <br />
      {item.description}
      <br />
      {`¥ ${item.price}`}
      {item.shipping_fee}
    </>
  );
};

ItemDetail.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    is_sold_out: PropTypes.bool,
    image: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    like_count: PropTypes.number,
    shipping_fee: PropTypes.string,
  }),
};

ItemDetail.defaultProps = {
  item: {
    id: '',
    is_sold_out: false,
    image: '',
    name: '',
    description: '',
    price: 0,
    like_count: 0,
    shipping_fee: '',
  },
};

export default memo(ItemDetail);
