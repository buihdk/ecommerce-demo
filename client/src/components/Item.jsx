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
  },
  media: {
    height: 140,
  },
});

const Item = props => {
  console.log(props);
  const { item } = props;
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={item.image}
          title={item.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {item.description}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {item.price}
          </Typography>
          <Favorite fontSize="small" />
          {item.like_count}
        </CardContent>
        <Link
          to={{
            pathname: `item/${item.id}`,
          }}
        >
          <Button size="small">Learn More</Button>
        </Link>
      </CardActionArea>
    </Card>
  );
};

Item.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    like_count: PropTypes.number,
  }),
};

Item.defaultProps = {
  item: {
    id: '',
    image: '',
    name: '',
    description: '',
    price: 0,
    like_count: 0,
  },
};

export default memo(Item);
