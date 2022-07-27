import { connect } from 'react-redux';
import Workspace from '../components/Workspace';
import * as actions from '../actions/creators';
import devices from '../assets/devices.json';

export default connect(
  state => ({
    deviceUrl:
      state.device.manufacturer && state.device.model
        ? devices[state.device.manufacturer][state.device.model]
        : null,

    imageUrl: state.image.url,
    imageWidth: state.Workspace.imageWidth,
    imageHeight: state.Workspace.imageHeight,
    imageRotation: state.Workspace.imageRotation,
    backgroundColor: state.Workspace.backgroundColor,

    imageTransformType: state.Workspace.imageTransformType,

    dragOffsetX: state.Workspace.dragOffsetX,
    dragOffsetY: state.Workspace.dragOffsetY,
  }),
  dispatch => ({
    // drag
    beginDraggingImage: (mouseX, mouseY) =>
      dispatch(actions.beginDraggingImage(mouseX, mouseY)),
    dragImage: (mouseX, mouseY) => dispatch(actions.dragImage(mouseX, mouseY)),
    stopDraggingImage: () => dispatch(actions.stopDraggingImage()),
    // rotation
    beginRotatingImage: () => dispatch(actions.beginRotatingImage()),
    rotateImage: (mouseX, mouseY) =>
      dispatch(actions.rotateImage(mouseX, mouseY)),
    stopRotatingImage: () => dispatch(actions.stopRotatingImage()),
    // resize
    beginResizingImage: direction =>
      dispatch(actions.beginResizingImage(direction)),
    resizeImage: (mouseX, mouseY) =>
      dispatch(actions.resizeImage(mouseX, mouseY)),
    stopResizingImage: () => dispatch(actions.stopResizingImage()),
  }),
)(Workspace);
