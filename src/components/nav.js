import React from 'react';
//import {useData} from '../Contexts/DataContext';
import {Link} from 'react-router-dom';

export const Nav =()=>{
   
    return(
        <div>
            <nav className="navbar">
              <Link to ="/productlist">
                <div className="brand">
                    <div className="brand-title ">PeachCart</div>
                </div> 
            </Link>
                <ul className="list-non-bullet nav-pills">
                    <Link to= "/cart">
                        <li className="list-item-inline"><button className="icon-btn"><i className="fa fa-shopping-cart" aria-hidden="true"></i>Cart</button></li>
                    </Link>
                    <Link to ="/wishlist"> 
                        <li className="list-item-inline"><button className="icon-btn"><i className="fa fa-heart" aria-hidden="true"></i> Wishlist</button></li>
                    </Link>
                </ul>
            </nav>   
        </div>
    )
}