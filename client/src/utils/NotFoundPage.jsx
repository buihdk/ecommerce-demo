import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { makeStyles, Box, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emoji: {
    fontSize: 40,
    letterSpacing: 10,
  },
});

const NotFoundPage = ({ errorCode }) => {
  const styles = useStyles();
  const history = useHistory();
  const handleClick = () => history.push('/');

  let response = '';
  switch (errorCode) {
    case 404:
      response = 'Page not found.';
      break;
    case 400:
      response = 'Item does not exist.';
      break;
    default:
      response = 'Bad request.';
  }

  return (
    <Box className={styles.container}>
      <Typography variant="h1">{`Error ${errorCode}`}</Typography>
      <Typography variant="h6" gutterBottom>
        {response}
      </Typography>
      <span className={styles.emoji} role="img" aria-label="sad-faces">
        😵😖😫
      </span>
      <Button onClick={handleClick} variant="outlined">
        Back to homepage
      </Button>
    </Box>
  );
};

NotFoundPage.propTypes = {
  errorCode: PropTypes.number,
};

NotFoundPage.defaultProps = {
  errorCode: 0,
};

export default memo(NotFoundPage);
