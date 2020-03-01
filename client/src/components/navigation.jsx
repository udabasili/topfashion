import React, {useState, useEffect} from 'react';
import {ReactComponent as NavLogo} from "../assets/tie.svg";
import {connect} from "react-redux";
import { logOut } from '../redux/actions/user.actions';
import CartIcon from './cart-icon.components';
import CartDropDown from "./card-dropdown.component"

function Navigation({currentUser, logUserOut, hideDropDown}) {

  const [authState, setAuthState] = useState("")
  const [token, setToken] = useState(null)

  useEffect(()=>{
    setAuthState(currentUser)
    setToken(localStorage.getItem("validator"))        
  },[currentUser])

  return (
    <nav className="navigation">
        <div className="logo-box">
            <NavLogo className="logo"/>
        </div>
        <ul className="navigation__list">
            <li className="navigation__item"><a href="/" className="navigation__link">Home</a></li>
            <li className="navigation__item"><a href="/shop/all" className="navigation__link">Shop</a></li>
            {(authState && token) ? (
            <li onClick={() => logUserOut()} className="navigation__item">
            <a href="/" className="navigation__link">
              Sign Out</a>
            </li>
            ):
            <li className="navigation__item"><a href="/auth" className="navigation__link">
              Sign In</a>
            </li>
            }
            <li className="navigation__item"><CartIcon/></li>
        </ul>
        {!hideDropDown && <CartDropDown/>}

    </nav>
  );
}

const mapStateToProps = (state) =>({
  currentUser: state.user,
  hideDropDown: state.cart.hideDropDown

})

const mapDispatchToProps = (dispatch) => ({
  logUserOut: () => dispatch(logOut()) 
})
export default connect(mapStateToProps, mapDispatchToProps)(Navigation)
