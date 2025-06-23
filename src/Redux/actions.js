

export const add_dsBook = "add_dsBook";
export const sub_dsBook = "sub_dsBook";
export const input_dsBook="input_dsBook"


export const addDsBook = () => ({
  type: add_dsBook,
});

export const subDsBook = () => ({
  type: sub_dsBook,
});
export const inputDsBook = (value) => ({
  type: input_dsBook,
  payload: value,
});
