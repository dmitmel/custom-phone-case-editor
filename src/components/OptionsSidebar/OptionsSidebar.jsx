import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button/Button';
import Drawer from '@material-ui/core/Drawer/Drawer';
import Icon from '@material-ui/core/Icon/Icon';
import UploadImage from './UploadImage';
import Size from './Size';
import Rotation from './Rotation';
import Palette from './Palette';
import * as stylesVars from '../styles';

const styles = ({ palette, spacing }) => ({
  drawer: {
    width: stylesVars.optionsSidebarWidth,
    padding: spacing.unit * 2,
    background: palette.background.default,
  },
});

const OptionsSidebar = ({
  backgroundColor,
  onBackgroundColorChange,
  imageFilename,
  onImageChange,
  imageWidth,
  imageHeight,
  onImageWidthChange,
  onImageHeightChange,
  imageRotation,
  onImageRotationChange,
  onRotate90,
  classes,
}) => {
  const disabled = !imageFilename;

  return (
    <Drawer variant="permanent" classes={{ paper: classes.drawer }}>
      <UploadImage filename={imageFilename} onChange={onImageChange} />

      <Size
        width={imageWidth}
        height={imageHeight}
        onWidthChange={onImageWidthChange}
        onHeightChange={onImageHeightChange}
        disabled={disabled}
      />

      <Rotation
        value={imageRotation}
        onChange={onImageRotationChange}
        onRotate90={onRotate90}
        disabled={disabled}
      />

      <Palette
        value={backgroundColor}
        onChange={onBackgroundColorChange}
        disabled={disabled}
      />

      <Button variant="raised" color="secondary" style={{ marginTop: 'auto' }}>
        <Icon style={{ marginRight: 8 }}>add_shopping_cart</Icon>
        Add to Cart
      </Button>
    </Drawer>
  );
};

OptionsSidebar.propTypes = {
  // image
  imageFilename: PropTypes.string,
  onImageChange: PropTypes.func.isRequired,
  // size
  imageWidth: PropTypes.number,
  imageHeight: PropTypes.number,
  onImageWidthChange: PropTypes.func.isRequired,
  onImageHeightChange: PropTypes.func.isRequired,
  // rotation
  imageRotation: PropTypes.number.isRequired,
  onImageRotationChange: PropTypes.func.isRequired,
  onRotate90: PropTypes.func.isRequired,
  // background color
  backgroundColor: PropTypes.string.isRequired,
  onBackgroundColorChange: PropTypes.func.isRequired,

  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OptionsSidebar);
