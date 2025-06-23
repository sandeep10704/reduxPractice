export const ADD_DS_BOOK = "add_dsBook";
export const SUB_DS_BOOK = "sub_dsBook";
export const INPUT_DS_BOOK = "input_dsBook";
export const ADD_BOOK = "add_book";
export const REMOVE_BOOK = "remove_book";


export const addDsBook = () => ({
  type: ADD_DS_BOOK,
});

export const subDsBook = () => ({
  type: SUB_DS_BOOK,
});

export const inputDsBook = (value) => ({
  type: INPUT_DS_BOOK,
  payload: value,
});

export const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  payload: id,
});
