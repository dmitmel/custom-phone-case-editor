const ImageTransformType = {
  NONE: 'none',
  DRAGGING: 'dragging',
  ROTATING: 'rotating',
  RESIZING: 'resizing',
  RESIZING_TOP_RIGHT: 'resizing-top-right',
  RESIZING_BOTTOM_RIGHT: 'resizing-bottom-right',
  RESIZING_BOTTOM_LEFT: 'resizing-bottom-left',
  RESIZING_TOP_LEFT: 'resizing-top-left',
};

export default ImageTransformType;

export const IMAGE_TRANSFORM_CURSORS = {
  [ImageTransformType.NONE]: 'default',
  [ImageTransformType.DRAGGING]: 'move',
  [ImageTransformType.ROTATING]: 'crosshair',
  [ImageTransformType.RESIZING_TOP_RIGHT]: 'ne-resize',
  [ImageTransformType.RESIZING_BOTTOM_RIGHT]: 'se-resize',
  [ImageTransformType.RESIZING_BOTTOM_LEFT]: 'sw-resize',
  [ImageTransformType.RESIZING_TOP_LEFT]: 'nw-resize',
};

export const CURSORS_IMAGE_TRANSFORM = {
  default: ImageTransformType.NONE,
  move: ImageTransformType.DRAGGING,
  crosshair: ImageTransformType.ROTATING,
  'ne-resize': ImageTransformType.RESIZING_TOP_RIGHT,
  'se-resize': ImageTransformType.RESIZING_BOTTOM_RIGHT,
  'sw-resize': ImageTransformType.RESIZING_BOTTOM_LEFT,
  'nw-resize': ImageTransformType.RESIZING_TOP_LEFT,
};
