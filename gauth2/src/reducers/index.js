import React from "react";
import { combineReducers } from "redux";
import { authReducer } from "./authReducer";

export const reducers = combineReducers({
  auth: authReducer
});
