import { useReducer } from "react";

const DEFAULT_FORM_VALUE = {
  name: "",
  text: "",
  rating: 1,
};

const SET_NAME_ACTION = "SET_NAME";
const SET_TEXT_ACTION = "SET_TEXT";
const SET_RATING_ACTION_INCREASE = "SET_RATING_INCREASE";
const SET_RATING_ACTION_DECREASE = "SET_RATING_DECREASE";
const CLEAR = "CLEAR";

const reduser = (state, { type, payload }) => {
  switch (type) {
    case SET_NAME_ACTION:
      return { ...state, name: payload };
    case SET_TEXT_ACTION:
      return { ...state, text: payload };
    case SET_RATING_ACTION_INCREASE:
      return { ...state, rating: Math.min(payload, 5) };
    case SET_RATING_ACTION_DECREASE:
      return { ...state, rating: Math.max(payload, 1) };
    case CLEAR:
      return { ...DEFAULT_FORM_VALUE };
    default:
      state;
  }
};

export const useReviewForm = () => {
  const [form, dispatch] = useReducer(reduser, DEFAULT_FORM_VALUE);

  const setName = (name) => {
    dispatch({ type: SET_NAME_ACTION, payload: name });
  };

  const setText = (text) => {
    dispatch({ type: SET_TEXT_ACTION, payload: text });
  };

  const increase = () => {
    dispatch({ type: SET_RATING_ACTION_INCREASE, payload: form.rating + 1 });
  };

  const decrease = () => {
    dispatch({ type: SET_RATING_ACTION_DECREASE, payload: form.rating - 1 });
  };

  const clear = () => {
    dispatch({ type: CLEAR });
  };

  return {
    form,
    setName,
    setText,
    increase,
    decrease,
    clear,
  };
};
