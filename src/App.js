// App.js
import React from "react";
import "./App.css";
import Counter from "./components/Counter";
import BookManager from "./components/BookManager";
import Calculator from "./components/Calculator";


function App() {
  return (
    <div style={{ padding: "20px" }}>
      <Counter />
      <hr />
      <BookManager />
      <hr />
      <Calculator/>
    </div>

  )
}
export default App;
