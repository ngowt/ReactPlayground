import { Auth } from "./types";

export const signIn = userId => {
  return {
    type: Auth.SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: Auth.SIGN_OUT,
    payload: {}
  };
};
