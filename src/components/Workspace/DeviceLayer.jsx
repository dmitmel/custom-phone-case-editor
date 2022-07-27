import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import Layer from '../Layer';

const styles = {
  wrapper: { display: 'flex' },
  wrapperH: { flexDirection: 'row' },
  wrapperV: { flexDirection: 'column' },

  margin: {
    width: '100%',
    height: '100%',
    background: '#fff',
  },
};

const DeviceLayer = ({ deviceUrl, classes }) => (
  <Layer classes={{ root: classNames(classes.wrapper, classes.wrapperH) }}>
    <div className={classes.margin} />

    <div className={classNames(classes.wrapper, classes.wrapperV)}>
      <div className={classes.margin} />
      <img src={deviceUrl} alt="device" />
      <div className={classes.margin} />
    </div>

    <div className={classes.margin} />
  </Layer>
);

DeviceLayer.propTypes = {
  deviceUrl: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DeviceLayer);
