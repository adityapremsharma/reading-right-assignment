import { combineReducers } from "redux";
import unSplashReducer from "./unSplashReducer";

export default combineReducers({
  data: unSplashReducer,
});
