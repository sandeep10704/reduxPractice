import { ADD, SUBTRACT, MULTIPLY, DIVIDE, RESET, SET_INPUT } from './calculator-actions';

const initialState = {
  input: 0,
  result: 0,
};

const calculatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INPUT:
      return { ...state, input: action.payload };
    case ADD:
      return { ...state, result: state.result + state.input };
    case SUBTRACT:
      return { ...state, result: state.result - state.input };
    case MULTIPLY:
      return { ...state, result: state.result * state.input };
    case DIVIDE:
      return { ...state, result: state.input !== 0 ? state.result / state.input : state.result };
    case RESET:
      return initialState;
    default:
      return state;
  }
};

export default calculatorReducer;
