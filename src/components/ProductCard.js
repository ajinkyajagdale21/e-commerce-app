import React from 'react';
import { useData } from '../Contexts/DataContext';
import {Link} from 'react-router-dom';

export const ProductCard=({product})=>{

  const {dispatch} = useData();

  const addToCart=()=>{
    dispatch({type:"ADD_TO_CART",payload: product});
  }

  const addToWishlist=()=>{
    dispatch({type:"ADD_TO_WISHLIST",payload:product});
  }
  const {productName,image,price,ratings, id} = product;
    return(
      <div>
        
        <div className="product-card">
        <Link to = {`/productlist/${id}`}>
            <img className="product-img" src={image} alt="product"/>
           <p> {productName}</p>
           <p> {ratings}🌟</p> 
           <p>$ {price}</p>
          </Link>
           <button className="card-btn" onClick={addToCart}>Add to Cart</button>
           <button className="card-btn" onClick={addToWishlist}>Add to wishlist</button>
        </div>
        
      </div>
    )
}