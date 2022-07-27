import React from 'react';
import PropTypes from 'prop-types';
import ImageTransformType, {
  IMAGE_TRANSFORM_CURSORS,
} from '../../utils/ImageTransformType';
import {
  imageControlsColor as color,
  imageFrameStrokeWidth as frameStrokeWidth,
  imageFrameOpacity as frameOpacity,
  imageRotationPointSize as size,
  imageRotationOffset as offset,
} from '../styles';

const Rotate = ({ imageWidth, beginRotatingImage }) => (
  <>
    <line
      x1={imageWidth / 2}
      y1={-offset}
      x2={imageWidth / 2}
      y2={-frameStrokeWidth / 2}
      stroke={color}
      strokeWidth={frameStrokeWidth}
      strokeOpacity={frameOpacity}
    />

    <circle
      cx={imageWidth / 2}
      cy={-offset}
      r={size / 2}
      fill={color}
      cursor={IMAGE_TRANSFORM_CURSORS[ImageTransformType.ROTATING]}
      onMouseDown={beginRotatingImage}
    />
  </>
);

Rotate.propTypes = {
  imageWidth: PropTypes.number.isRequired,
  beginRotatingImage: PropTypes.func.isRequired,
};

export default Rotate;
