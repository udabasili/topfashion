import React from 'react';
import {ReactComponent as NavLogo} from "../assets/tie.svg";

export default function Navigation() {
  return (
    <nav className="navigation">
        <div className="logo-box">
            <NavLogo className="logo"/>
        </div>
        <ul className="navigation__list">
            <li className="navigation__item"><a href="" className="navigation__link">Home</a></li>
            <li className="navigation__item"><a href="" className="navigation__link">Shop</a></li>
            <li className="navigation__item"><a href="" className="navigation__link">Gallery</a></li>
            <li className="navigation__item"><a href="/auth" className="navigation__link">Sign In</a></li>
        </ul>
    </nav>
  );
}


