import React from 'react';

export const ProductCard=({product})=>{

  const addToCart=()=>{
    dispatch({type:"ADD_TO_CART",payload: product});
  }

  const {productName,image,price,ratings,_id} = product;
    return(
      <div>
        <div className="product-card">
            <img className="product-img" src={image} alt="product"/>
           <p>{_id} {productName}</p>
           <p> {ratings}🌟</p> 
           <p>$ {price}</p>
           <button className="card-btn" onclick={addToCart}>Add to Cart</button>
           <button className="card-btn" >Add to wishlist</button>
        </div>
      </div>
    )
}