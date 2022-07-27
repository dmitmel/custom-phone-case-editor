import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography/Typography';
import Input from '@material-ui/core/Input/Input';

const styles = ({ palette, spacing, typography }) => ({
  root: {
    marginBottom: spacing.unit * 2,
  },
  disabled: {
    color: palette.action.disabled,
  },
  input: {
    width: '4ch',
    fontSize: typography.fontSize,
    textAlign: 'right',
  },
});

const Size = ({
  width,
  height,
  onWidthChange,
  onHeightChange,
  disabled,
  classes,
}) => (
  <>
    <Typography
      component="div"
      className={classnames({
        [classes.root]: true,
        [classes.disabled]: disabled,
      })}>
      Width:{' '}
      <Input
        type="number"
        value={Math.round(width).toString()}
        onChange={({ target }) =>
          onWidthChange(Math.abs(parseInt(target.value, 10) || 0))
        }
        disabled={disabled}
        classes={{ input: classes.input }}
      />
    </Typography>

    <Typography
      component="div"
      className={classnames({
        [classes.root]: true,
        [classes.disabled]: disabled,
      })}>
      Height:{' '}
      <Input
        type="number"
        value={Math.round(height).toString()}
        onChange={({ target }) =>
          onHeightChange(Math.abs(parseInt(target.value, 10) || 0))
        }
        disabled={disabled}
        classes={{ input: classes.input }}
      />
    </Typography>
  </>
);

Size.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  onWidthChange: PropTypes.func.isRequired,
  onHeightChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Size);
