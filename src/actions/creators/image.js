import { UPLOAD_IMAGE } from '../types/image';

export function uploadImage(filename, url, width, height) {
  return { type: UPLOAD_IMAGE, filename, url, width, height };
}
