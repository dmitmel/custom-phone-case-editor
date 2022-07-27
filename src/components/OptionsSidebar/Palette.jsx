import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import IconButton from '@material-ui/core/IconButton/IconButton';
import classnames from 'classnames';
import BACKGROUND_COLORS from '../../utils/backgroundColors';

const styles = ({ palette, spacing }) => ({
  row: {
    display: 'flex',
    marginBottom: spacing.unit,
    alignItems: 'stretch',
    justifyContent: 'space-between',
  },
  color: {
    width: 32,
    height: 32,
    boxSizing: 'content-box',
  },
  colorSelected: {
    boxShadow: `0 0 0 3px ${palette.secondary.main}`,
  },
});

function Palette({ value: selectedColor, onChange, disabled, classes }) {
  const renderColors = (start, end) => (
    <div className={classes.row}>
      {BACKGROUND_COLORS.slice(start, end).map(color => (
        <IconButton
          key={color}
          data-value={color}
          disabled={disabled}
          className={classnames({
            [classes.color]: true,
            [classes.colorSelected]: !disabled && color === selectedColor,
          })}
          style={{ background: disabled ? fade(color, 0.5) : color }}
          onClick={({ target }) => onChange(target.dataset.value)}
        />
      ))}
    </div>
  );

  return (
    <div>
      {renderColors(0, BACKGROUND_COLORS.length / 2)}
      {renderColors(BACKGROUND_COLORS.length / 2)}
    </div>
  );
}

Palette.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Palette);
