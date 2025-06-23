import {
  ADD_DS_BOOK,
  SUB_DS_BOOK,
  INPUT_DS_BOOK,
  ADD_BOOK,
  REMOVE_BOOK,
} from "./actions";

const initialState = {
  dsBookCount: 0,
  books: [],
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DS_BOOK:
      return {
        ...state,
        dsBookCount: state.dsBookCount + 1,
      };
    case SUB_DS_BOOK:
      return {
        ...state,
        dsBookCount: Math.max(0, state.dsBookCount - 1),
      };
    case INPUT_DS_BOOK:
      return {
        ...state,
        dsBookCount: action.payload,
      };
    case ADD_BOOK:
      return {
        ...state,
        books: [...state.books, action.payload],
      };
    case REMOVE_BOOK:
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload),
      };
    default:
      return state;
  }
};


export default rootReducer;
