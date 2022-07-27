import { connect } from 'react-redux';
import compose from 'recompose/compose';
import withHandlers from 'recompose/withHandlers';
import OptionsSidebar from '../components/OptionsSidebar';
import * as actions from '../actions/creators';

export default compose(
  connect(
    state => ({
      imageFilename: state.image.filename,
      imageWidth: state.Workspace.imageWidth,
      imageHeight: state.Workspace.imageHeight,
      imageRotation: state.Workspace.imageRotation,
      backgroundColor: state.Workspace.backgroundColor,
    }),
    dispatch => ({
      onImageChange: (filename, url, width, height) =>
        dispatch(actions.uploadImage(filename, url, width, height)),
      onImageWidthChange: width => dispatch(actions.setWidth(width)),
      onImageHeightChange: height => dispatch(actions.setHeight(height)),
      onImageRotationChange: rotation =>
        dispatch(actions.setRotation(rotation)),
      onBackgroundColorChange: backgroundColor =>
        dispatch(actions.setBackgroundColor(backgroundColor)),
    }),
  ),

  withHandlers({
    onRotate90: ({ imageRotation, onImageRotationChange }) => () =>
      onImageRotationChange(imageRotation + 90),
  }),
)(OptionsSidebar);
