import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import CounterPage from "./pages/CounterPage";
import BookList from "./pages/BookList";
import AddBook from "./pages/AddBook";
import EditBook from "./pages/EditBook";
import Header from "./components/Header";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<BookList />}></Route>
        <Route path="/home" element={<Homepage />}></Route>
        <Route path="/counter" element={<CounterPage />}></Route>
        <Route path="/all-books" element={<BookList />}></Route>
        <Route path="/add-book" element={<AddBook />}></Route>
        <Route path="/edit-book" element={<EditBook />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
