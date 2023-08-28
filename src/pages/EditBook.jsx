import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { deleteBook, updateBook } from "../redux/BookSlice";

const EditBook = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState(location.state.name);
  const [author, setAuthor] = useState(location.state.author);
  const id = location.state.id;

  const handleUpdateBook = (e) => {
    e.preventDefault();

    const book = { name, author, id };

    dispatch(updateBook(book));
    navigate("/all-books", { replace: true });
  };
  return (
    <div>
      <h1>Edit Book</h1>
      <div className="mt-10 flex justify-center">
        <form onSubmit={handleUpdateBook}>
          <div className="flex flex-col items-start mb-4">
            <label>Book Name</label>
            <input
              type="text"
              name="name"
              placeholder="Book Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-stone-800 px-4 py-2 w-80"
            />
          </div>
          <div className="flex flex-col items-start mb-4">
            <label>Author Name</label>
            <input
              type="text"
              name="author"
              placeholder="Author Name"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="border border-stone-800 px-4 py-2 w-80"
            />
          </div>
          <div>
            <button type="submit" className="positive">
              Update Book
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBook;
