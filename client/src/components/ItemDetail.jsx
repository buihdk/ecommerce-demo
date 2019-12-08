import React, { memo, lazy } from 'react';
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
  if (!item) {
    const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));
    return <NotFoundPage errorCode={400} />;
  }

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
    image: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    shipping_fee: PropTypes.string,
    price: PropTypes.number,
    like_count: PropTypes.number,
    is_sold_out: PropTypes.bool,
  }),
};

ItemDetail.defaultProps = {
  item: {
    id: '',
    image: '',
    name: '',
    description: '',
    shipping_fee: '',
    price: 0,
    like_count: 0,
    is_sold_out: false,
  },
};

export default memo(ItemDetail);
