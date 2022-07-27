import * as actions from '../actions/types';
import ImageTransformType from '../utils/ImageTransformType';
import normalizeRotation from '../utils/normalizeRotation';
import BACKGROUND_COLOR from '../utils/backgroundColors';

const SNAP_ROTATIONS = [0, 90, 180, 270, 360];
const SNAP_ROTATION_THRESHOLD = 2.5;

export default function Workspace(
  state = {
    backgroundColor: BACKGROUND_COLOR[3],
    imageX: 0,
    imageY: 0,
    imageWidth: null,
    imageHeight: null,
    imageRotation: 0,

    imageTransformType: ImageTransformType.NONE,

    dragOffsetX: null,
    dragOffsetY: null,
  },
  action,
) {
  switch (action.type) {
    case actions.UPLOAD_IMAGE: {
      return {
        ...state,
        imageWidth: action.width,
        imageHeight: action.height,
      };
    }

    // background color
    case actions.SET_BACKGROUND_COLOR: {
      return {
        ...state,
        backgroundColor: action.backgroundColor,
      };
    }

    // drag
    case actions.BEGIN_DRAGGING_IMAGE: {
      return {
        ...state,
        imageTransformType: ImageTransformType.DRAGGING,
        dragOffsetX: action.mouseX - state.imageX,
        dragOffsetY: action.mouseY - state.imageY,
      };
    }
    case actions.DRAG_IMAGE: {
      return {
        ...state,
        imageX: action.mouseX - state.dragOffsetX,
        imageY: action.mouseY - state.dragOffsetY,
      };
    }
    case actions.STOP_DRAGGING_IMAGE: {
      return {
        ...state,
        imageTransformType: ImageTransformType.NONE,
        dragOffsetX: null,
        dragOffsetY: null,
      };
    }

    // rotation
    case actions.SET_ROTATION: {
      return {
        ...state,
        imageRotation: normalizeRotation(action.rotation),
      };
    }
    case actions.BEGIN_ROTATING_IMAGE: {
      return {
        ...state,
        imageTransformType: ImageTransformType.ROTATING,
      };
    }
    case actions.ROTATE_IMAGE: {
      const image = { x: state.imageX, y: state.imageY };
      const mouse = { x: action.mouseX, y: action.mouseY };
      const diff = { x: mouse.x - image.x, y: mouse.y - image.y };

      const dist = Math.sqrt(diff.x ** 2 + diff.y ** 2);
      if (dist === 0) return state;

      let rotation = normalizeRotation(
        Math.atan2(diff.x / dist, -diff.y / dist) * (180 / Math.PI),
      );

      const nearestSnapRotation = SNAP_ROTATIONS.find(
        snapRotation =>
          Math.abs(snapRotation - rotation) < SNAP_ROTATION_THRESHOLD,
      );

      if (nearestSnapRotation != null) rotation = nearestSnapRotation % 360;

      return {
        ...state,
        imageRotation: rotation,
      };
    }
    case actions.STOP_ROTATING_IMAGE: {
      return {
        ...state,
        imageTransformType: ImageTransformType.NONE,
      };
    }

    // resize
    case actions.SET_WIDTH: {
      return {
        ...state,
        imageWidth: action.width,
        imageHeight: action.width * (state.imageHeight / state.imageWidth),
      };
    }
    case actions.SET_HEIGHT: {
      return {
        ...state,
        imageWidth: action.height * (state.imageWidth / state.imageHeight),
        imageHeight: action.height,
      };
    }
    case actions.BEGIN_RESIZING_IMAGE: {
      return {
        ...state,
        imageTransformType: action.direction,
      };
    }
    case actions.RESIZE_IMAGE: {
      const image = { x: state.imageX, y: state.imageY };
      const mouse = { x: action.mouseX, y: action.mouseY };
      const diff = { x: mouse.x - image.x, y: mouse.y - image.y };

      const dist = Math.sqrt(diff.x ** 2 + diff.y ** 2);
      if (dist === 0) return state;

      const halfDiagonal = Math.sqrt(
        (state.imageWidth / 2) ** 2 + (state.imageHeight / 2) ** 2,
      );

      return {
        ...state,
        imageWidth: state.imageWidth * (dist / halfDiagonal),
        imageHeight: state.imageHeight * (dist / halfDiagonal),
      };
    }
    case actions.STOP_RESIZING_IMAGE: {
      return {
        ...state,
        imageTransformType: ImageTransformType.NONE,
      };
    }

    default: {
      return state;
    }
  }
}
