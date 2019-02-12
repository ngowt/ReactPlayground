import { Auth } from "../actions/types";

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case Auth.SIGN_IN:
      return { ...state, userId: action.payload, isSignedIn: true };
    case Auth.SIGN_OUT:
      return { ...state, userId: null, isSignedIn: false };
    default:
      return state;
  }
};
