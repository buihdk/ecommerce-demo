import React, { memo, lazy } from 'react';
import PropTypes from 'prop-types';
import {
  makeStyles,
  Paper,
  Box,
  CardMedia,
  Chip,
  Typography,
} from '@material-ui/core';
import { FavoriteBorder, ChatBubbleOutline } from '@material-ui/icons';

const useStyles = makeStyles({
  paper: {
    padding: '10px',
  },
  media: {
    height: 400,
  },
  icon: {
    fontSize: 16,
  },
  chipWrapper: {
    marginTop: 16,
    marginBottom: 8,
  },
  count: {
    color: 'darkgrey',
    fontWeight: 600,
    lineHeight: '32px',
    display: 'inline-block',
    marginLeft: '4px',
  },
});

const ItemDetail = ({ item, categoryName }) => {
  const styles = useStyles();
  if (!item) {
    const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));
    return <NotFoundPage errorCode={400} />;
  }

  return (
    <Paper className={styles.paper}>
      <Typography>{item.name}</Typography>
      <CardMedia className={styles.media} image={item.image} />
      <Typography>{`Name: ${item.name}`}</Typography>
      <Box display="flex" justifyContent="space-between">
        <Box className={styles.chipWrapper}>
          <Chip
            label="いいね!"
            icon={<FavoriteBorder className={styles.icon} />}
          />
          <Box className={styles.count}>{item.like_count}</Box>
        </Box>
        <Box className={styles.chipWrapper}>
          <Chip
            label="コメント"
            icon={<ChatBubbleOutline className={styles.icon} />}
          />
          <Box className={styles.count}>{item.comment_count}</Box>
        </Box>
      </Box>
      <Typography>{`Categories: ${categoryName}`}</Typography>
      <Typography>{`Description: ${item.description}`}</Typography>
      <Typography variant="h5" component="span">{`¥ ${item.price}`}</Typography>
      <Typography component="span">{item.shipping_fee}</Typography>
    </Paper>
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
    comment_count: PropTypes.number,
    is_sold_out: PropTypes.bool,
  }),
  categoryName: PropTypes.string,
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
    comment_count: 0,
    is_sold_out: false,
  },
  categoryName: '',
};

export default memo(ItemDetail);
