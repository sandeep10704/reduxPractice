import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addDsBook,
  subDsBook,
  inputDsBook,
  addBook,
  removeBook,
} from "./Redux/actions";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const dsBookCount = useSelector((state) => state.dsBookCount);
  const books = useSelector((state) => state.books);

  const [bookInput, setBookInput] = useState("");

  const handleAddBook = () => {
    if (bookInput.trim()) {
      dispatch(addBook({ id: Date.now(), name: bookInput.trim() }));
      setBookInput("");
    }
  };

  const handleRemoveBook = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>DS Book Count: {dsBookCount}</h2>
      <button onClick={() => dispatch(addDsBook())}>Add DS Book</button>
      <button onClick={() => dispatch(subDsBook())}>Remove DS Book</button>

      <br />
      <input
        type="number"
        onChange={(e) => dispatch(inputDsBook(Number(e.target.value)))}
        placeholder="Enter number"
        style={{ marginTop: "10px" }}
      />

      <hr />

      <h3>Add Book to List</h3>
      <input
        type="text"
        value={bookInput}
        onChange={(e) => setBookInput(e.target.value)}
        placeholder="Enter book name"
      />
      <button onClick={handleAddBook}>Add Book</button>

      <h3>Book List:</h3>
      <ul>
        {books.length > 0 ? (
          books.map((book) => (
            <li key={book.id}>
              {book.name}{" "}
              <button onClick={() => handleRemoveBook(book.id)}>Remove</button>
            </li>
          ))
        ) : (
          <p>No books yet.</p>
        )}
      </ul>
    </div>
  );
}

export default App;
