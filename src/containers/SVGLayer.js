import { connect } from 'react-redux';
import SVGLayer from '../components/SVGLayer';

export default connect(state => ({
  imageWidth: state.Workspace.imageWidth,
  imageHeight: state.Workspace.imageHeight,

  imageX: state.Workspace.imageX,
  imageY: state.Workspace.imageY,
  imageRotation: state.Workspace.imageRotation,
}))(SVGLayer);
