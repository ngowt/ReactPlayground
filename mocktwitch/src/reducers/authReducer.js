export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return {
        ...state,
        isSignedIn: true,
        authenticatedUserId: action.payload
      };
    case "SIGN_OUT":
      return { ...state, isSignedIn: false, authenticatedUserId: null };
    default:
      return state;
  }
};
