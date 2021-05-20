import React from 'react';
import {useData} from '../Contexts/DataContext';

export const ProductCard=({product})=>{
  const {state:{cart,wishList},dispatch}=useData()
  const {productName,image,price,ratings,_id} = product;
    return(
      <div>
        <div className="product-card">
            <img className="product-img" src={image}/>
           <p> {productName}</p>
           <p> {ratings}🌟</p> 
           <p>$ {price}</p>

        </div>
      </div>
    )
}