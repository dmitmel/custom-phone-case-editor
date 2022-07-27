import {
  SET_BACKGROUND_COLOR,
  // drag
  BEGIN_DRAGGING_IMAGE,
  DRAG_IMAGE,
  STOP_DRAGGING_IMAGE,
  // rotation
  SET_ROTATION,
  BEGIN_ROTATING_IMAGE,
  ROTATE_IMAGE,
  STOP_ROTATING_IMAGE,
  // resize
  SET_WIDTH,
  SET_HEIGHT,
  BEGIN_RESIZING_IMAGE,
  RESIZE_IMAGE,
  STOP_RESIZING_IMAGE,
} from '../types/Workspace';

export function setBackgroundColor(backgroundColor) {
  return { type: SET_BACKGROUND_COLOR, backgroundColor };
}

// drag

export function beginDraggingImage(mouseX, mouseY) {
  return { type: BEGIN_DRAGGING_IMAGE, mouseX, mouseY };
}

export function dragImage(mouseX, mouseY) {
  return { type: DRAG_IMAGE, mouseX, mouseY };
}

export function stopDraggingImage() {
  return { type: STOP_DRAGGING_IMAGE };
}

// rotation

export function setRotation(rotation) {
  return { type: SET_ROTATION, rotation };
}

export function beginRotatingImage() {
  return { type: BEGIN_ROTATING_IMAGE };
}

export function rotateImage(mouseX, mouseY) {
  return { type: ROTATE_IMAGE, mouseX, mouseY };
}

export function stopRotatingImage() {
  return { type: STOP_ROTATING_IMAGE };
}

// resize

export function setWidth(width) {
  return { type: SET_WIDTH, width };
}

export function setHeight(height) {
  return { type: SET_HEIGHT, height };
}

export function beginResizingImage(direction) {
  return { type: BEGIN_RESIZING_IMAGE, direction };
}

export function resizeImage(mouseX, mouseY) {
  return { type: RESIZE_IMAGE, mouseX, mouseY };
}

export function stopResizingImage() {
  return { type: STOP_RESIZING_IMAGE };
}
