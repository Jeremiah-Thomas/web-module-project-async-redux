import {
  FETCH_START,
  FETCH_FAIL,
  FETCH_SUCCESS,
  INPUT_NAME,
  RESET_INPUT,
} from "../actions";

const initialState = {
  prediction: {},
  name: "",
  isFetching: false,
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        prediction: {},
        isFetching: true,
        error: "",
      };
    case FETCH_FAIL:
      return {
        ...state,
        prediction: {},
        isFetching: false,
        error: action.payload,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        prediction: action.payload,
        isFetching: false,
        error: "",
      };
    case INPUT_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case RESET_INPUT:
      return { ...state, name: "" };
    default:
      return state;
  }
};

export default reducer;
