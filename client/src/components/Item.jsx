import React from 'react';
import {
  makeStyles,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  IconButton,
  Typography,
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

const Item = item => {
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
          <IconButton aria-label="add to favorites">
            <Favorite fontSize="small" />
            {item.like_count}
          </IconButton>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Item;
