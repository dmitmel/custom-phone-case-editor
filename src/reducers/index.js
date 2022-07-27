import { combineReducers } from 'redux';
import device from './device';
import image from './image';
import SelectDevice from './SelectDevice';
import Workspace from './Workspace';

const rootReducer = combineReducers({
  device,
  image,
  SelectDevice,
  Workspace,
});

export default rootReducer;
