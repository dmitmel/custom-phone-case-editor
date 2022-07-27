import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = {
  root: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
};

const Layer = ({ component: Component, classes, children, ...props }) => (
  <Component className={classes.root} {...props}>
    {children}
  </Component>
);

Layer.propTypes = {
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  classes: PropTypes.object.isRequired,
};

Layer.defaultProps = {
  component: 'div',
};

export default withStyles(styles)(Layer);
