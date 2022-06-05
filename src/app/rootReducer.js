import { combineReducers } from "@reduxjs/toolkit";

import { loginReducer } from "./../features/login/loginSlice";

const rootReducer = combineReducers({
  signin: loginReducer,
});

export default rootReducer;
