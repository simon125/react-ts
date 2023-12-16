import React, { FC, useEffect, useState } from "react";
import { Product } from "./components/Product";

import { Grid } from "@mui/material";

interface ProductType {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
}

export const Products: FC = () => {
  //   const [products, setProducts] = useState<Array<ProductType>>([]);
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    let endpoint = "https://dummyjson.com/products";

    fetch(endpoint)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);

        setProducts(data.products);
      });
  }, []);

  return (
    <Grid container spacing={5}>
      {products.map((product) => (
        <Grid key={product.id} item xs={4}>
          <Product
            description={product.description}
            thumbnail={product.thumbnail}
            title={product.title}
            id={product.id}
          />
        </Grid>
      ))}
    </Grid>
  );
};
