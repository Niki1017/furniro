import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";


import App from "./App";
import Shop from "./components/Shop";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/shop" element={<Shop />} />
      {/* <Route path="/about" element={<About />} /> */}
      {/* <Route path="/contacts" element={<Contacts />} /> */}
    </Routes>
  </BrowserRouter>
);
