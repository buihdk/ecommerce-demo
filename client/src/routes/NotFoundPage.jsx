import React from 'react';
import { Box, Typography } from '@material-ui/core';

function NotFoundPage() {
  return (
    <Box display="flex" justifyContent="center" flexDirection="column">
      <Typography variant="h1">Error 404</Typography>
      <Typography variant="h6">Page not found.</Typography>
      😵😖😫
    </Box>
  );
}

export default NotFoundPage;
