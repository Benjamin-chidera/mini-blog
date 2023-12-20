import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { AddToFavorite } from "./pages/AddToFavorite";
import { Favorite } from "./pages/Favorite";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <BrowserRouter><Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addToFavorite" element={<AddToFavorite />} />
          <Route path="/Favorite" element={<Favorite />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
