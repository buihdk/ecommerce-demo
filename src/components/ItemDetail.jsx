import React, { memo, lazy, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import {
  makeStyles,
  Paper,
  Box,
  CardMedia,
  Chip,
  Avatar,
  Typography,
  Fab,
} from '@material-ui/core';
import {
  FavoriteBorder,
  ChatBubbleOutline,
  Flag,
  ArrowBackIos,
} from '@material-ui/icons';

const useStyles = makeStyles({
  container: {
    marginTop: 80,
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
    marginLeft: 4,
  },
  body: {
    padding: '0px 20px 8px',
  },
  footer: {
    color: 'white',
    backgroundColor: '#35231F',
    display: 'flex',
    alignItems: 'baseline',
    padding: 10,
    position: 'relative',
  },
  footerCallToAction: {
    backgroundColor: '#e43',
    position: 'absolute',
    top: 10,
    right: 10,
    lineHeight: '39px',
    padding: '0px 10px',
  },
  backBtn: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
});

export const useHistoryPush = history =>
  useCallback(() => history.push('/'), [history]);

const ItemDetail = ({ item, categoryName }) => {
  const styles = useStyles();
  const history = useHistory();
  const handleClick = useHistoryPush(history);

  if (!item) {
    const NotFoundPage = lazy(() => import('utils/NotFoundPage'));
    return <NotFoundPage errorCode={400} />;
  }

  return (
    <>
      <Paper className={styles.container}>
        <Typography variant="h6" align="center">
          {item.name}
        </Typography>
        <CardMedia
          className={styles.media}
          image={item.image ? item.image : 'https://picsum.photos/id/0/400/400'}
        />
        <Typography className={styles.body}>{`Name: ${item.name}`}</Typography>
        <Box
          className={styles.body}
          display="flex"
          justifyContent="space-between"
        >
          <Box className={styles.chipWrapper}>
            <Chip
              label="Like!"
              icon={<FavoriteBorder className={styles.icon} />}
            />
            <Box className={styles.count}>{item.like_count}</Box>
          </Box>
          <Box className={styles.chipWrapper}>
            <Chip
              label="Comment"
              icon={<ChatBubbleOutline className={styles.icon} />}
            />
            <Box className={styles.count}>{item.comment_count}</Box>
          </Box>
          <Box
            className={styles.chipWrapper}
            display={{ xs: 'none', sm: 'block' }}
          >
            <Avatar>
              <Flag />
            </Avatar>
          </Box>
        </Box>
        <Typography className={styles.body}>
          {`Categories: ${categoryName}`}
        </Typography>
        <Typography className={styles.body}>
          {`Description: ${item.description}`}
        </Typography>
        <Box className={styles.footer}>
          <Typography component="span" variant="h4">
            {`$ ${item.price}`}
          </Typography>
          <Typography
            component="span"
            variant="subtitle2"
            style={{ marginLeft: 8 }}
          >
            {item.shipping_fee}
          </Typography>
          <Box
            className={styles.footerCallToAction}
            display={{ xs: 'none', sm: 'block' }}
          >
            Add to cart
          </Box>
        </Box>
      </Paper>
      <Fab variant="extended" onClick={handleClick} className={styles.backBtn}>
        <ArrowBackIos />
        Back
      </Fab>
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
