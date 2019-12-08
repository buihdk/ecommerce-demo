import React, { memo } from 'react';
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

const NotFoundPage = () => {
  const styles = useStyles();
  const history = useHistory();
  const handleClick = () => history.push('/');

  return (
    <Box className={styles.container}>
      <Typography variant="h1">Error 404</Typography>
      <Typography variant="h6" gutterBottom>
        Page not found.
      </Typography>
      <span className={styles.emoji} role="img" aria-label="sad-faces">
        😵😖😫
      </span>
      <Button onClick={handleClick} variant="outlined">
        Go back to homepage
      </Button>
    </Box>
  );
};

export default memo(NotFoundPage);
