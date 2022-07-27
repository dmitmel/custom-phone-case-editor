import React from 'react';
import PropTypes from 'prop-types';
import normalizeRotation from '../../utils/normalizeRotation';
import ImageTransformType, {
  IMAGE_TRANSFORM_CURSORS as CURSORS,
  CURSORS_IMAGE_TRANSFORM,
} from '../../utils/ImageTransformType';
import {
  imageControlsColor as color,
  imageResizePointSize as size,
} from '../styles';

const {
  RESIZING_TOP_RIGHT,
  RESIZING_BOTTOM_RIGHT,
  RESIZING_BOTTOM_LEFT,
  RESIZING_TOP_LEFT,
} = ImageTransformType;

const IMAGE_RESIZE_CURSOR_ANGLES = {
  [CURSORS[RESIZING_TOP_RIGHT]]: 45,
  [CURSORS[RESIZING_BOTTOM_RIGHT]]: 135,
  [CURSORS[RESIZING_BOTTOM_LEFT]]: 225,
  [CURSORS[RESIZING_TOP_LEFT]]: 315,
};

class Resize extends React.Component {
  static propTypes = {
    imageWidth: PropTypes.number.isRequired,
    imageHeight: PropTypes.number.isRequired,
    imageRotation: PropTypes.number.isRequired,
    beginResizingImage: PropTypes.func.isRequired,
  };

  beginResizingImage = ({ target }) => {
    const { beginResizingImage } = this.props;
    const cursor = target.getAttribute('cursor');
    beginResizingImage(CURSORS_IMAGE_TRANSFORM[cursor]);
  };

  render() {
    const { imageWidth: w, imageHeight: h, imageRotation } = this.props;

    return [
      { x: w, y: 0, angle: 45 },
      { x: w, y: h, angle: 135 },
      { x: 0, y: h, angle: 225 },
      { x: 0, y: 0, angle: 315 },
    ].map(({ x, y, angle }) => (
      <rect
        key={angle}
        x={x - size / 2}
        y={y - size / 2}
        width={size}
        height={size}
        fill={color}
        cursor={getCursor(normalizeRotation(imageRotation + angle))}
        onMouseDown={this.beginResizingImage}
      />
    ));
  }
}

function getCursor(angle) {
  let result = '';
  let minDist = 360;

  Object.keys(IMAGE_RESIZE_CURSOR_ANGLES).forEach(cursor => {
    const cursorAngle = IMAGE_RESIZE_CURSOR_ANGLES[cursor];
    const dist = Math.abs(angle - cursorAngle);
    if (dist <= minDist) {
      minDist = dist;
      result = cursor;
    }
  });

  return result;
}

export default Resize;
