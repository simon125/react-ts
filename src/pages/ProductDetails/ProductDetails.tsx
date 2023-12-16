import React, { FC, useEffect, useState } from "react";

import { useParams } from "react-router-dom";

interface ProductType {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
}

export const ProductDetails: FC = () => {
  const { id } = useParams<{ id: string }>();

  const [product, setProduct] = useState<ProductType>();

  useEffect(() => {
    let endpoint = `https://dummyjson.com/products/${id}`;

    fetch(endpoint)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);

        setProduct(data);
      });
  }, [id]);

  if (!product) return null;

  return (
    <div>
      ProductDetails
      <pre>{JSON.stringify(product, null, 2)}</pre>
    </div>
  );
};
