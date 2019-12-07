import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  makeStyles,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Button,
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
    left: -84,
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

const ItemList = ({ items }) => {
  const styles = useStyles();

  return (
    <div>
      {items &&
        items.map(item => (
          <Card key={item.id} className={styles.card}>
            {item.is_sold_out && (
              <span className={styles.soldRibbon}>SOLD</span>
            )}
            <CardActionArea>
              <CardMedia className={styles.media} image={item.image} />
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
              <Link
                to={{
                  pathname: `items/${item.id}`,
                }}
              >
                <Button size="small">Learn More</Button>
              </Link>
            </CardActionArea>
          </Card>
        ))}
    </div>
  );
};

ItemList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      is_sold_out: PropTypes.bool,
      image: PropTypes.string,
      name: PropTypes.string,
      description: PropTypes.string,
      price: PropTypes.number,
      like_count: PropTypes.number,
    }),
  ),
};

ItemList.defaultProps = {
  items: [
    {
      id: '',
      is_sold_out: false,
      image: '',
      name: '',
      description: '',
      price: 0,
      like_count: 0,
    },
  ],
};

export default memo(ItemList);
