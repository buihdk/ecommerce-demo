import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import {
  makeStyles,
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  ButtonBase,
} from '@material-ui/core';
import { FavoriteBorder } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
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
  icon: {
    fontSize: 17,
    marginRight: 4,
  },
  image: {
    position: 'relative',
    height: 400,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) +
      6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

const ItemList = ({ items }) => {
  const styles = useStyles();
  const history = useHistory();

  return (
    <Grid container justify="center" spacing={2}>
      {items &&
        items.map(item => (
          <Grid key={item.id} item>
            <Card className={styles.card}>
              {item.is_sold_out && (
                <Box className={styles.soldRibbon}>SOLD</Box>
              )}
              <ButtonBase
                focusRipple
                key={item.name}
                className={styles.image}
                focusVisibleClassName={styles.focusVisible}
                style={{ width: 400 }}
                onClick={() => history.push(`items/${item.id}`)}
              >
                <span
                  className={styles.imageSrc}
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <span className={styles.imageBackdrop} />
                <span className={styles.imageButton}>
                  <Typography
                    component="span"
                    variant="subtitle1"
                    color="inherit"
                    className={styles.imageTitle}
                  >
                    View
                    <span className={styles.imageMarked} />
                  </Typography>
                </span>
              </ButtonBase>
              <CardContent>
                <Typography variant="h6" color="textSecondary">
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
