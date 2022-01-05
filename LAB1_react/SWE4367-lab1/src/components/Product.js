import React from 'react'


export const Product = ({product,upVote}) => {


  return (
    <div id="product">
      <img src={product.images.src} alt="" />
      <div className="product-details">
        <div id="product_vote">
          <button onClick={(e) => upVote(product.id)}>
            <img src="triangle.png" alt="" />
          </button>
          <p>{product.vote}</p>
        </div>
        <div id="product_description">
          <p id="product-name">{product.name}</p>
          <p>{product.description}</p>
        </div>
        <div>
          <p id="submitter-info">
            submitted by: <i></i>
          </p>
        </div>
      </div>
    </div>
  );

 }