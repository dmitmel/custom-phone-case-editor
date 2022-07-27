import * as actions from '../actions/types';

export default function UploadImage(
  state = {
    url: null,
    width: null,
    height: null,
  },
  action,
) {
  switch (action.type) {
    case actions.UPLOAD_IMAGE: {
      return {
        ...state,
        filename: action.filename,
        url: action.url,
        width: action.width,
        height: action.height,
      };
    }
    default: {
      return state;
    }
  }
}
