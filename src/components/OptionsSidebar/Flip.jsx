import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = {};

const Flip = ({ onFlipVertical, onFlipHorizontal }) => <div />;

Flip.propTypes = {
  onFlipVertical: PropTypes.func.isRequired,
  onFlipHorizontal: PropTypes.func.isRequired,
};

export default withStyles(styles)(Flip);
