import * as actionTypes from '../actions/actionTypes';

const initialState = {
  systemEnv: ''
};

export default function (state = initialState, action = { type: '' }) {
  switch (action.type) {
    /***DEFAULT */
    case actionTypes.API_ERROR: {
      return { ...state, error: '404' };
    }
    case actionTypes.SYSTEM_ENV_LOADED: {
      return { ...state, systemEnv: action.payload };
    }
    default: {
      return state;
    }
  }
}
