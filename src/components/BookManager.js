// BookManager.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBook, removeBook } from "../Redux/actions";

function BookManager() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.dsBooks.books);
  const [bookInput, setBookInput] = useState("");

  const handleAddBook = () => {
    const trimmedInput = bookInput.trim();
    if (trimmedInput) {
      dispatch(addBook({ id: Date.now(), name: trimmedInput }));
      setBookInput("");
    }
  };

  const handleRemoveBook = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <div style={{ padding: "1rem", maxWidth: "400px" }}>
      <h3>Add Book to List</h3>
      <input
        type="text"
        value={bookInput}
        onChange={(e) => setBookInput(e.target.value)}
        placeholder="Enter book name"
        style={{ padding: "0.5rem", width: "100%" }}
      />
      <button onClick={handleAddBook} style={{ marginTop: "0.5rem" }}>
        Add Book
      </button>

      <h3 style={{ marginTop: "1rem" }}>Book List:</h3>
      {books.length > 0 ? (
        <ul>
          {books.map((book) => (
            <li key={book.id} style={{ marginBottom: "0.3rem" }}>
              {book.name}{" "}
              <button onClick={() => handleRemoveBook(book.id)}>Remove</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No books yet.</p>
      )}
    </div>
  );
}

export default BookManager;
