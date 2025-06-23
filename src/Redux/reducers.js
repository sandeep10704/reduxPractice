
import { add_dsBook, sub_dsBook ,input_dsBook} from './actions';

const initialState = {
  dsBookCount: 0,
};

const dsBookReducer = (state = initialState, action) => {
  switch (action.type) {
    case add_dsBook:
      return {
        ...state,
        dsBookCount: state.dsBookCount + 1,
      };
    case sub_dsBook:
      return {
        ...state,
        dsBookCount: Math.max(0, state.dsBookCount - 1),
      };
    case input_dsBook:
      return {
      ...state,
      dsBookCount: action.payload
    }
    default:
      return state;
  }
};

export default dsBookReducer;
