import React from 'react'
import { NavLink } from 'react-router-dom';


export default function ShopNav() {
  return (
      <div className="shop-nav">
        <nav className="shop-nav__nav">
            <ul className="shop-nav__list">
                <li className="shop-nav__item" >
                    <NavLink to="/shop/all" 
                      className="shop-nav__link">All</NavLink>
                </li>
                <li className="shop-nav__item" >
                    <NavLink to="/shop/womens" name="women"
                     activeClassName="active" className="shop-nav__link">Women</NavLink>
                </li>
                <li className="shop-nav__item" >
                    <NavLink to="/shop/mens" name="men" 
                        activeClassName="active"  
                        className="shop-nav__link" >Men</NavLink>
                </li>
            </ul>
            <ul className="shop-nav__list">
                <li className="shop-nav__item" >
                    <NavLink className="shop-nav__link" 
                        to="/shop/hats" name="hats" 
                        activeClassName="active" >Hats</NavLink>
                </li>
                <li className="shop-nav__item" >
                    <NavLink className="shop-nav__link" 
                        to="/shop/jackets" name="jackets" 
                        activeClassName="active" >Jackets</NavLink>
                </li>
            </ul>
        </nav>
      </div>
    
  );
}


