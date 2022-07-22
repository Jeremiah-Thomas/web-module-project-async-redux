import axios from "axios";
import { store } from "./../index";

export const FETCH_START = "FETCH_START";
export const FETCH_FAIL = "FETCH_FAIL";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const INPUT_NAME = "INPUT_NAME";
export const RESET_INPUT = "RESET_INPUT";

export const fetchStart = () => {
  return { type: FETCH_START };
};

export const fetchSuccess = (prediction) => {
  return { type: FETCH_SUCCESS, payload: prediction };
};

export const fetchFail = (error) => {
  return { type: FETCH_FAIL, payload: error };
};

export const inputName = (name) => {
  return { type: INPUT_NAME, payload: name };
};

export const resetInput = () => {
  return { type: RESET_INPUT };
};

export const getPrediction = () => {
  return (dispatch) => {
    dispatch(fetchStart());
    axios
      .get(`https://api.agify.io?name=${store.getState().name}`)
      .then((res) => {
        dispatch(fetchSuccess(res.data));
      })
      .catch((err) => {
        dispatch(fetchFail(err.message));
      });
  };
};
