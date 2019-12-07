import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, CardMedia, Chip } from '@material-ui/core';
import { FavoriteBorder } from '@material-ui/icons';

const useStyles = makeStyles({
  media: {
    height: 140,
  },
  icon: {
    fontSize: 16,
  },
  likeContainer: {
    marginTop: 16,
    marginBottom: 8,
  },
  likeCount: {
    color: 'darkgrey',
    fontWeight: 600,
    lineHeight: '32px',
    display: 'inline-block',
    marginLeft: '4px',
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
      <div className={styles.likeContainer}>
        <Chip
          label="いいね!"
          icon={<FavoriteBorder className={styles.icon} />}
        />
        <span className={styles.likeCount}>{item.like_count}</span>
      </div>
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
