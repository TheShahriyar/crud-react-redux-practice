import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialBooks = {
  books: [
    { id: uuidv4(), name: "This is book one", author: "John Doe" },
    { id: uuidv4(), name: "This is book Two", author: "Jane Doe" },
  ],
};

export const bookSlice = createSlice({
  name: "books",
  initialState: initialBooks,
  reducers: {
    showBooks: (state) => state,
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    updateBook: (state, action) => {
      const { id, name, author } = action.payload;

      const isExist = state.books.filter((book) => book.id === id);
      if (isExist) {
        isExist[0].name = name;
        isExist[0].author = author;
      }
    },
    deleteBook: (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
  },
});

export const { showBooks, addBook, deleteBook, updateBook } = bookSlice.actions;

export default bookSlice.reducer;
