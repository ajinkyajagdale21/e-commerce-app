import React from 'react';
import { useData } from '../Contexts/DataContext';
import {Nav} from './nav';



export const Cart=()=>{
    const {state}=useData();
    return(
        <div>
            <Nav/>
            {state.cart.map(each=>
                <div className="product-card">
            <img className="product-img" src={each.image} alt="product"/>
           <p> {each.productName}</p>
           <p> {each.ratings}🌟</p> 
           <p>$ {each.price}</p>
           </div> )}
        </div>
    )
}
