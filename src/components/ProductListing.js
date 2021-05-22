import React from 'react';
import {useData} from '../Contexts/DataContext';
import {ProductCard} from '../components/ProductCard';
import {Nav} from './nav';

export const ProductListing=()=>{
    const {state : {loading} , priceFilteredData} = useData()
    return(
        <div>
            <div>
            <Nav/>
            {loading ? <h3>Loading....</h3> : (
                    <div >
                        {priceFilteredData.map(product => <ProductCard  product = {product}  key={product.id}/>)}
                    </div>
            )}
        </div>
        </div>
    )
}