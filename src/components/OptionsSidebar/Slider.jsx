import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography/Typography';
import MuiSlider from '@material-ui/lab/Slider/Slider';

const styles = {
  root: {
    width: '100%',
  },
  label: {},
};

const Slider = ({ label, value, onChange, classes, ...props }) => (
  <div className={classes.root}>
    <Typography id={classes.label}>{label}</Typography>

    <MuiSlider
      value={value}
      aria-labelledby={classes.label}
      onChange={(event, newValue) => onChange(newValue)}
      {...props}
    />
  </div>
);

Slider.propTypes = {
  label: PropTypes.element.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Slider);
