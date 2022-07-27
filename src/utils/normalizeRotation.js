export default function normalizeRotation(rotation) {
  if (rotation < 0) rotation += 360;
  return rotation % 360;
}
