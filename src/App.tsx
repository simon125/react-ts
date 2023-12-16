import { FC } from "react";
import Container from "@mui/material/Container";
import { Products } from "./pages/Products/Products";
import { ProductDetails } from "./pages/ProductDetails/ProductDetails";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </Container>
  );
}

export default App;
