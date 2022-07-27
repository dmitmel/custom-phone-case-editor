import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography/Typography';
import Input from '@material-ui/core/Input/Input';
import IconButton from '@material-ui/core/IconButton/IconButton';
import Icon from '@material-ui/core/Icon';

const styles = ({ palette, spacing, typography }) => ({
  root: {
    display: 'flex',
    marginBottom: spacing.unit * 2,
    alignItems: 'center',
  },
  disabled: {
    color: palette.action.disabled,
  },
  input: {
    width: '3ch',
    fontSize: typography.fontSize,
    textAlign: 'right',
  },
  rotate90: {
    marginLeft: 'auto',
    transform: 'scaleY(-1)',
  },
});

const Rotation = ({ value, onChange, onRotate90, disabled, classes }) => (
  <div className={classes.root}>
    <Typography component="div" className={disabled ? classes.disabled : null}>
      Rotation:{' '}
      <Input
        type="number"
        value={Math.round(value).toString()}
        onChange={({ target }) => onChange(parseInt(target.value, 10) || 0)}
        disabled={disabled}
        classes={{ input: classes.input }}
      />
      &deg;
    </Typography>

    <IconButton
      className={classes.rotate90}
      onClick={onRotate90}
      disabled={disabled}
      aria-label="Rotate 90º clockwise">
      <Icon>rotate_90_degrees_ccw</Icon>
    </IconButton>
  </div>
);

Rotation.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  onRotate90: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Rotation);
