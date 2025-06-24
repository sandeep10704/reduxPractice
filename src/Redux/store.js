
import { createStore, combineReducers } from "redux";
import dsBookReducer from "./reducers";
import calculatorReducer from "./calculator-reducers";


const rootReducer = combineReducers({
  dsBooks: dsBookReducer,
  calculator: calculatorReducer,
});


const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
