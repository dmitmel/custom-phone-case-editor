import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import ImageLayer from './ImageLayer';
import SVGLayer from '../../containers/SVGLayer';
import DeviceLayer from './DeviceLayer';
import ImageFrame from './ImageFrame';
import Rotate from './Rotate';
import Resize from './Resize';
import ImageTransformType, {
  IMAGE_TRANSFORM_CURSORS,
} from '../../utils/ImageTransformType';
import { optionsSidebarWidth } from '../styles';

const styles = {
  wrapper: {
    height: '100%',
    marginLeft: optionsSidebarWidth,
  },

  root: {
    position: 'relative',
    height: '100%',
    background: '#fff',
  },

  uploadButton: {
    position: 'absolute',
    top: 50,
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 1,
  },
};

class Workspace extends React.Component {
  static propTypes = {
    deviceUrl: PropTypes.string,

    imageUrl: PropTypes.string,
    imageWidth: PropTypes.number,
    imageHeight: PropTypes.number,
    imageRotation: PropTypes.number.isRequired,
    backgroundColor: PropTypes.string.isRequired,

    imageTransformType: PropTypes.string.isRequired,

    // drag
    beginDraggingImage: PropTypes.func.isRequired,
    dragImage: PropTypes.func.isRequired,
    stopDraggingImage: PropTypes.func.isRequired,

    // rotation
    beginRotatingImage: PropTypes.func.isRequired,
    rotateImage: PropTypes.func.isRequired,
    stopRotatingImage: PropTypes.func.isRequired,

    // resize
    beginResizingImage: PropTypes.func.isRequired,
    resizeImage: PropTypes.func.isRequired,
    stopResizingImage: PropTypes.func.isRequired,

    classes: PropTypes.object.isRequired,
  };

  onBeginDraggingImage = event => {
    const { beginDraggingImage } = this.props;
    const { x, y } = this.getMousePosition(event);
    beginDraggingImage(x, y);
  };

  onMouseMove = event => {
    const {
      imageTransformType,
      dragImage,
      rotateImage,
      resizeImage,
    } = this.props;

    const { x, y } = this.getMousePosition(event);

    // eslint-disable-next-line default-case
    switch (imageTransformType) {
      case ImageTransformType.DRAGGING:
        dragImage(x, y);
        break;
      case ImageTransformType.ROTATING:
        rotateImage(x, y);
        break;
      case ImageTransformType.RESIZING_TOP_RIGHT:
      case ImageTransformType.RESIZING_BOTTOM_RIGHT:
      case ImageTransformType.RESIZING_BOTTOM_LEFT:
      case ImageTransformType.RESIZING_TOP_LEFT:
        resizeImage(x, y);
        break;
    }
  };

  onMouseUp = () => {
    const {
      imageTransformType,
      stopDraggingImage,
      stopRotatingImage,
      stopResizingImage,
    } = this.props;

    // eslint-disable-next-line default-case
    switch (imageTransformType) {
      case ImageTransformType.DRAGGING:
        stopDraggingImage();
        break;
      case ImageTransformType.ROTATING:
        stopRotatingImage();
        break;
      case ImageTransformType.RESIZING_TOP_RIGHT:
      case ImageTransformType.RESIZING_BOTTOM_RIGHT:
      case ImageTransformType.RESIZING_BOTTOM_LEFT:
      case ImageTransformType.RESIZING_TOP_LEFT:
        stopResizingImage();
        break;
    }
  };

  getMousePosition(event) {
    const rect = this.root.getBoundingClientRect();
    return {
      x: event.pageX - (rect.left + rect.width / 2),
      y: event.pageY - (rect.top + rect.height / 2),
    };
  }

  render() {
    const {
      deviceUrl,
      imageUrl,
      imageWidth,
      imageHeight,
      imageRotation,
      backgroundColor,
      imageTransformType,
      beginRotatingImage,
      beginResizingImage,
      classes,
    } = this.props;

    return (
      <div className={classes.wrapper}>
        {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
        <div
          className={classes.root}
          style={{ cursor: IMAGE_TRANSFORM_CURSORS[imageTransformType] }}
          ref={root => {
            this.root = root;
          }}
          onMouseMove={this.onMouseMove}
          onMouseUp={this.onMouseUp}>
          {imageUrl && (
            <ImageLayer
              imageUrl={imageUrl}
              imageWidth={imageWidth}
              imageHeight={imageHeight}
              backgroundColor={backgroundColor}
            />
          )}

          {deviceUrl && <DeviceLayer deviceUrl={deviceUrl} />}

          {imageUrl && (
            <SVGLayer>
              <ImageFrame
                width={imageWidth}
                height={imageHeight}
                onMouseDown={this.onBeginDraggingImage}
              />

              <Resize
                imageWidth={imageWidth}
                imageHeight={imageHeight}
                imageRotation={imageRotation}
                beginResizingImage={beginResizingImage}
              />

              <Rotate
                imageWidth={imageWidth}
                beginRotatingImage={beginRotatingImage}
              />
            </SVGLayer>
          )}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Workspace);
