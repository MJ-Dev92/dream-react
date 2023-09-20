import React, { useState } from "react";
import useProducts from "../hooks/use-products";
import { useQuery } from "@tanstack/react-query";

export default function Products() {
  const [checked, setChecked] = useState(false);
  // const [loading, error, products] = useProducts({ salesOnly: checked });
  const {
    isLoading,
    error,
    data: products,
  } = useQuery(["products"], async () => {
    console.log("fetching");
    return fetch(`data/products.json`).then((res) => res.json());
  });
  const handleChange = () => setChecked((prev) => !prev);

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error}</p>;
  return (
    <>
      <input type="checkbox" value={checked} onChange={handleChange} />
      <label htmlFor="checkbox">Show Only Hot Sale</label>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
}
