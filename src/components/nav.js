import React from 'react';
import {useData} from '../Contexts/DataContext';
import {Link} from 'react-router-dom';

export const Nav =()=>{
   
    return(
        <div>
           <nav className="navbar">
                <Link to ='/'>
                    <div className="nav-brand">
                        <div className="navbrand-head">ESportz</div>
                    </div>
                </Link>
                <div className="input nav-search desk">
                    <i className="fas fa-search"></i>
                    <input type="text" className="inputText" placeholder="search"/>
                </div>
                <div className="nav-items">
                    <Link to ="/wishlist">
                        <div className="badge-on-icon nav-pills">
                        <i className="fas fa-heart icon-only wish"></i>
                        </div>
                    </Link>
                    <Link to = '/cart'>
                        <div className="badge-on-icon nav__pills">
                            <i className="fas fa-shopping-cart  icon-only cart"></i>
                        </div>
                    </Link>
                </div>

           </nav>
        </div>
    )
}