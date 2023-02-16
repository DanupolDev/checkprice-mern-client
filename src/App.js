import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import { datas } from "./datas/datas";

/** import components */
import { Navbar, Feed, Login, Update, CreateProduct } from "./components";

function App() {
  console.log(datas);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/login" element={<Login />} />
        <Route path="/update/:slug" element={<Update />} />
        <Route path="/create_product" element={<CreateProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
