import * as actions from '../actions/types';

export default function UploadImage(
  state = {
    manufacturer: '',
    model: '',
  },
  action,
) {
  switch (action.type) {
    case actions.SELECT_DEVICE_MANUFACTURER: {
      return {
        ...state,
        manufacturer: action.manufacturer,
        model: '',
      };
    }
    case actions.SELECT_DEVICE_MODEL: {
      return {
        ...state,
        model: action.model,
      };
    }
    default: {
      return state;
    }
  }
}
