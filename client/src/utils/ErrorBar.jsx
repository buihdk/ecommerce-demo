import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Box, Snackbar, SnackbarContent } from '@material-ui/core';
import { Error } from '@material-ui/icons';

const renderMessage = msg => (
  <Box display="flex" alignItems="center">
    <Error />
    <span style={{ marginLeft: 4 }}>{msg}</span>
  </Box>
);

const ErrorBar = ({ msg }) => (
  <Snackbar open anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
    <SnackbarContent
      style={{ backgroundColor: '#e43' }}
      message={renderMessage(msg)}
    />
  </Snackbar>
);

ErrorBar.propTypes = {
  msg: PropTypes.string,
};

ErrorBar.defaultProps = {
  msg: '',
};

export default memo(ErrorBar);
