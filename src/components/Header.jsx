import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-center bg-stone-900 py-4 text-white space-x-4">
      <Link to="/home" className="text-white">
        Home
      </Link>
      <Link to="/all-books" className="text-white">
        All Books
      </Link>
      <Link to="/add-book" className="text-white">
        Add Book
      </Link>
      <Link to="/counter" className="text-white">
        Counter App
      </Link>
    </div>
  );
};

export default Header;
