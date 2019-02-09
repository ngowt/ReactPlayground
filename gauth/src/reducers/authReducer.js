import { Auth } from "../actions/types";

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case Auth.SIGN_IN:
      return { ...state, isSignedIn: true, userId: action.payload };
    case Auth.SIGN_OUT:
      return { ...state, isSignedIn: false, userId: null };
    default:
      return state;
  }
};
