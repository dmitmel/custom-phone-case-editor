import * as actions from '../actions/types';

export default function SelectDevice(
  state = {
    deviceSelected: false,
  },
  action,
) {
  switch (action.type) {
    case actions.SELECT_DEVICE: {
      return {
        ...state,
        deviceSelected: true,
      };
    }
    default: {
      return state;
    }
  }
}
