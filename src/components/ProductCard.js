import React from 'react';
import {useData} from '../Contexts/DataContext';

export const ProductCard=({product})=>{
  const {state:{cart,wishList},dispatch}=useData()
  const {productName,image,price,ratings,_id} = product;
    return(
        <div>
            <img src={image}/>
            {productName}
            {ratings}
            {price}

        </div>
    )
}