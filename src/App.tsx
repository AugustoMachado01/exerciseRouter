import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Product } from "./Product";
import { ProductItem } from "./ProductItem";
import { Head } from "./components/Head";

export default function App() {
  return (
    <BrowserRouter>
      <Head title="" />
      <Home />
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="produtoitem/:id" element={<ProductItem />} />
      </Routes>
    </BrowserRouter>
  );
}
