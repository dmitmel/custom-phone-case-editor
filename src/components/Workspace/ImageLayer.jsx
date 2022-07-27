import React from 'react';
import PropTypes from 'prop-types';
import SVGLayer from '../../containers/SVGLayer';

const ImageLayer = ({ imageUrl, imageWidth, imageHeight, backgroundColor }) => (
  <SVGLayer backgroundColor={backgroundColor}>
    <image
      xlinkHref={imageUrl}
      width={imageWidth}
      height={imageHeight}
      preserveAspectRatio="none"
    />
  </SVGLayer>
);

ImageLayer.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  imageWidth: PropTypes.number.isRequired,
  imageHeight: PropTypes.number.isRequired,
  backgroundColor: PropTypes.string.isRequired,
};

export default ImageLayer;
