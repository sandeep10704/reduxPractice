
import {
  ADD_DS_BOOK,
  SUB_DS_BOOK,
  INPUT_DS_BOOK,
  ADD_BOOK,
  REMOVE_BOOK,
} from "./actions";



const initialDsState = {
  Count: 0,
  books: [],
};

const dsBookReducer = (state = initialDsState, action) => {
  switch (action.type) {
    case ADD_DS_BOOK:
      return {
        ...state,
        Count: state.Count + 1,
      };
    case SUB_DS_BOOK:
      return {
        ...state,
        Count: Math.max(0, state.Count - 1),
      };
    case INPUT_DS_BOOK:
      return {
        ...state,
        Count: action.payload,
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



export default dsBookReducer;
