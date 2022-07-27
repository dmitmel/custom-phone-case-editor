import { connect } from 'react-redux';
import SelectDevice from '../components/SelectDevice';
import * as actions from '../actions/creators';

export default connect(
  state => ({
    manufacturer: state.device.manufacturer,
    model: state.device.model,

    deviceSelected: state.SelectDevice.deviceSelected,
  }),
  dispatch => ({
    onManufacturerChange: manufacturer =>
      dispatch(actions.selectDeviceManufacturer(manufacturer)),
    onModelChange: model => dispatch(actions.selectDeviceModel(model)),

    selectDevice: () => dispatch(actions.selectDevice()),
  }),
)(SelectDevice);
