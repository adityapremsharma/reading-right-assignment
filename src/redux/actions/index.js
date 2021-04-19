import unSplash from "../../apis/unSplash";
import { INPUT, IMAGE } from "./types";

export const input = (text) => {
  return {
    type: INPUT,
    payload: text,
  };
};

export const fetchImages = (inputText) => async (dispatch) => {
  const res = await unSplash.get("/search/photos", {
    params: { query: inputText ? inputText : "Random", per_page: 30 },
  });
  dispatch({ type: IMAGE, payload: res.data.results });
};
