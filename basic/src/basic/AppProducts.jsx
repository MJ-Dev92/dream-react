import React, { useState } from "react";
import Products from "./components/Products";
import "./App.css";

export default function AppProducts() {
  const [showProducts, setshowProducts] = useState(true);
  return (
    <div>
      {showProducts && <Products />}
      <button onClick={() => setshowProducts((show) => !show)}>Toggle</button>
    </div>
  );
}
