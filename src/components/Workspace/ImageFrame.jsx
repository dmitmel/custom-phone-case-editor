import React from 'react';
import PropTypes from 'prop-types';
import ImageTransformType, {
  IMAGE_TRANSFORM_CURSORS,
} from '../../utils/ImageTransformType';
import {
  imageControlsColor as color,
  imageFrameStrokeWidth as strokeWidth,
  imageFrameOpacity as opacity,
} from '../styles';

const ImageFrame = ({ ...props }) => (
  <rect
    x={0}
    y={0}
    fill="transparent"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeOpacity={opacity}
    cursor={IMAGE_TRANSFORM_CURSORS[ImageTransformType.DRAGGING]}
    {...props}
  />
);

ImageFrame.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export default ImageFrame;
