import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addBook } from "../redux/BookSlice";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddBook = (e) => {
    e.preventDefault();

    const book = { id: uuidv4(), name: name, author: author };
    dispatch(addBook(book));
    navigate("/all-books", { replace: true });
  };
  return (
    <div>
      <h1>Add New Book</h1>
      <div className="mt-10 flex justify-center">
        <form onSubmit={handleAddBook}>
          <div className="flex flex-col items-start mb-4">
            <label>Book Name</label>
            <input
              type="text"
              name="name"
              value={name}
              placeholder="Book Name"
              onChange={(e) => setName(e.target.value)}
              className="border border-stone-800 px-4 py-2 w-80"
            />
          </div>
          <div className="flex flex-col items-start mb-4">
            <label>Author Name</label>
            <input
              type="text"
              name="author"
              value={author}
              placeholder="Author Name"
              onChange={(e) => setAuthor(e.target.value)}
              className="border border-stone-800 px-4 py-2 w-80"
            />
          </div>
          <div>
            <button type="submit" className="positive">
              Add Book
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
