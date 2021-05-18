import React from 'react';
import {useData} from '../Contexts/DataContext';
import {ProductCard} from '../components/ProductCard';

export const ProductListing=()=>{
    const {state : {loading} , priceFilteredData} = useData()
    return(
        <div>
            <div>
        
            {loading ? <h3>Loading....</h3> : (
                    <div >
                        {priceFilteredData.map(product => <ProductCard  product = {product} key = {product._id}/>)}
                    </div>
            )}
        </div>
        </div>
    )
}