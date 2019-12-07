import React, { memo } from 'react';
import PropTypes from 'prop-types';
import {
  makeStyles,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from '@material-ui/core';
import { Favorite } from '@material-ui/icons';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    position: 'relative',
  },
  soldRibbon: {
    position: 'absolute',
    top: -16,
    left: -82,
    zIndex: 100,
    backgroundColor: '#e43',
    color: 'white',
    width: 200,
    lineHeight: '26px',
    paddingTop: 36,
    textAlign: 'center',
    letterSpacing: 3,
    transform: 'rotate(-45deg)',
  },
  media: {
    height: 140,
  },
});

const ItemDetail = ({ item }) => {
  const styles = useStyles();
  if (!item) return <h2>Item does not exist</h2>;

  return (
    <Card className={styles.card}>
      {item.is_sold_out && <span className={styles.soldRibbon}>SOLD</span>}
      <CardActionArea>
        <CardMedia
          className={styles.media}
          image={item.image}
          title={item.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {item.description}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {`¥ ${item.price}`}
          </Typography>
          <Favorite fontSize="small" />
          {item.like_count}
        </CardContent>
      </CardActionArea>
    </Card>
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
  },
};

export default memo(ItemDetail);
