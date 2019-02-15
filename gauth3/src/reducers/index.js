import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { reducer as formReducer } from "redux-form";

export const reducers = combineReducers({
  auth: authReducer,
  form: formReducer
});
