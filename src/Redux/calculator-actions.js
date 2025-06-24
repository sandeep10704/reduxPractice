
export const ADD = "ADD";
export const SUBTRACT = "SUBTRACT";
export const MULTIPLY = "MULTIPLY";
export const DIVIDE = "DIVIDE";
export const RESET = "RESET";
export const SET_INPUT = "SET_INPUT";


export const add = () => ({
  type: ADD,
});

export const subtract = () => ({
  type: SUBTRACT,
});

export const multiply = () => ({
  type: MULTIPLY,
});

export const divide = () => ({
  type: DIVIDE,
});

export const reset = () => ({
  type: RESET,
});

export const setInput = (value) => ({
  type: SET_INPUT,
  payload: value,
});
