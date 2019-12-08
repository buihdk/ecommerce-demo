import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  makeStyles,
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from '@material-ui/core';
import { FavoriteBorder } from '@material-ui/icons';

const useStyles = makeStyles({
  card: {
    position: 'relative',
  },
  soldRibbon: {
    position: 'absolute',
    top: -10,
    left: -76,
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
    height: 400,
    width: 400,
  },
  icon: {
    fontSize: 13,
    marginRight: 2,
  },
});

const ItemList = ({ items }) => {
  const styles = useStyles();

  return (
    <Grid container justify="center" spacing={2}>
      {items &&
        items.map(item => (
          <Grid key={item.id} item>
            <Card className={styles.card}>
              {item.is_sold_out && (
                <Box className={styles.soldRibbon}>SOLD</Box>
              )}
              <CardMedia className={styles.media} image={item.image} />
              <CardContent>
                <Typography variant="body1" color="textSecondary">
                  {item.name}
                  <Box display="flex" justifyContent="space-between">
                    <Typography variant="h6" color="textPrimary">
                      {`¥ ${item.price}`}
                    </Typography>
                    <Box>
                      <FavoriteBorder className={styles.icon} />
                      {item.like_count}
                    </Box>
                  </Box>
                </Typography>
                <Link to={{ pathname: `items/${item.id}` }}>
                  <Button variant="outline" size="small">
                    View Details
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
    </Grid>
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
