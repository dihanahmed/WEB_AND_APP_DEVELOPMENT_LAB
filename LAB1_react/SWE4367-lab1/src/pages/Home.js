import React from "react";
import { Header } from "../components/Header";
import { ProductList } from "../components/ProductList";
import productData from "../resources/product.json";

export const Home = () => {
  const loadData = () => {
    return JSON.parse(JSON.stringify(productData));
  };
  

  return (
    <>
      <Header />
      <ProductList productList={loadData()} />
    </>
  );
};
