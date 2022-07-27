import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button/Button';
import Dialog from '@material-ui/core/Dialog/Dialog';
import DialogActions from '@material-ui/core/DialogActions/DialogActions';
import DialogContent from '@material-ui/core/DialogContent/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle/DialogTitle';
import Slide from '@material-ui/core/Slide/Slide';
import Select from './Select';
import devices from '../../assets/devices.json';

const Transition = props => <Slide direction="up" {...props} />;

const styles = ({ spacing }) => ({
  dialog: {
    width: 320,
  },

  title: {},
  content: {
    display: 'flex',
    flexDirection: 'column',

    '& > *:not(:last-child)': {
      marginBottom: spacing.unit * 2,
    },
  },
});

const SelectDevice = ({
  manufacturer,
  onManufacturerChange,
  model,
  onModelChange,
  deviceSelected,
  selectDevice,
  classes,
}) => (
  <>
    <Dialog
      open={!deviceSelected}
      TransitionComponent={Transition}
      classes={{ paper: classes.dialog }}
      aria-labelledby={classes.title}
      aria-describedby={classes.content}>
      <DialogTitle id={classes.title}>Select Device</DialogTitle>

      <DialogContent className={classes.content}>
        <Select
          label="Manufacturer"
          values={Object.keys(devices)}
          selectedValue={manufacturer}
          onValueChange={onManufacturerChange}
        />

        <Select
          label="Model"
          values={manufacturer ? Object.keys(devices[manufacturer]) : null}
          disabled={!manufacturer}
          selectedValue={model}
          onValueChange={onModelChange}
        />
      </DialogContent>

      <DialogActions>
        <Button
          variant="raised"
          color="primary"
          disabled={!manufacturer || !model}
          onClick={selectDevice}>
          Next
        </Button>
      </DialogActions>
    </Dialog>
  </>
);

SelectDevice.propTypes = {
  manufacturer: PropTypes.string,
  onManufacturerChange: PropTypes.func.isRequired,

  model: PropTypes.string,
  onModelChange: PropTypes.func.isRequired,

  deviceSelected: PropTypes.bool.isRequired,
  selectDevice: PropTypes.func.isRequired,

  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SelectDevice);
