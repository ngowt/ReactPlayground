import { reducer as formReducer } from "redux-form";
import { combineReducers } from "redux";

export const reducers = combineReducers({
  form: formReducer
});
