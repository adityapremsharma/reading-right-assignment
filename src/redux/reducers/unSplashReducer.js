import { INPUT, IMAGE } from "../actions/types";

const INITIAL_STATE = {
  search: "",
  images: [],
};

const unSplashReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INPUT:
      return { ...state, search: action.payload };
    case IMAGE:
      return { ...state, images: action.payload };
    default:
      return state;
  }
};

export default unSplashReducer;
