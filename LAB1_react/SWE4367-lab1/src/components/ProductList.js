import React from "react";
import { useSort } from "../hooks/useSort";
import { Product } from "./Product";
import { useState } from "react/cjs/react.development";

export const ProductList = ({ productList }) => {
  const { sort } = useSort();
  const [data, setData] = useState(sort(productList, "vote"));

  const countUpvote = (productID) => {
    data.forEach(p => {
      if(p.id===productID){
        p.vote++;
      }
    });
    console.log(data);


    setData(sort(data,"vote"));

  };

  return (
    <div>
      <ul>
        {data?.map((product) => {
          return (
            <li key={product.id}>
              <Product product={product} upVote={countUpvote} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
