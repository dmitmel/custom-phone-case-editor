import React from 'react';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl/FormControl';
import InputLabel from '@material-ui/core/InputLabel/InputLabel';
import MuiSelect from '@material-ui/core/Select/Select';
import MenuItem from '@material-ui/core/MenuItem/MenuItem';

const Select = ({ label, values, selectedValue, onValueChange, ...props }) => (
  <FormControl {...props}>
    <InputLabel htmlFor="model-input">{label}</InputLabel>

    <MuiSelect
      id="model-input"
      name="model"
      value={selectedValue}
      onChange={({ target }) => onValueChange(target.value)}>
      {Array.isArray(values) &&
        values.map(value => (
          <MenuItem key={value} value={value}>
            {value}
          </MenuItem>
        ))}
    </MuiSelect>
  </FormControl>
);

Select.propTypes = {
  label: PropTypes.string.isRequired,
  values: PropTypes.arrayOf(PropTypes.string.isRequired),
  selectedValue: PropTypes.string.isRequired,
  onValueChange: PropTypes.func.isRequired,
};

export default Select;
