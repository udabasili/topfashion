import React, {useState, useEffect} from 'react';
import {ReactComponent as NavLogo} from "../assets/tie.svg";
import {connect} from "react-redux";
import { NavLink , useLocation} from 'react-router-dom'
import { logOut } from '../redux/actions/user.actions';
import CartIcon from './cart-icon.components';
import CartDropDown from "./card-dropdown.component"
import { toast } from 'react-toastify';

/*
 * @param {object} currentUser 
 * @param {function} logOut 
 * @param {function} hideDropDown 

 */

function Navigation({currentUser, logOut, hideDropDown}) {
	const {pathname} = useLocation()
	const [authState, setAuthState] = useState("")
	const [token, setToken] = useState(null)

	useEffect(()=>{
		setAuthState(currentUser)
		setToken(localStorage.getItem("validator"))        
	},[currentUser])
	
	const logOutHandler = () =>{
		logOut().then(() =>{
			toast.success("Logged out successfully")
		})
	}
	return (
		<nav className="navigation">
			<div className="logo-box">
				<NavLogo className="logo"/>
				<span>Top Fashion</span>
			</div>
			<ul className="navigation__list">
				<li className="navigation__item">
					<NavLink exact to="/" className="navigation__link" activeClassName='active-nav' >
						Home
					</NavLink>
				</li>
				<li className="navigation__item">
					<NavLink to="/shop/all" 
						className="navigation__link"
						activeClassName='active-nav'
						isActive={() => pathname.includes('shop') }
						>
						Shop
					</NavLink>
					</li>
				{(authState && token) ? (
				<li onClick={logOutHandler} className="navigation__item">
				Sign Out
				</li>
				):
				<li className="navigation__item"><NavLink to="/auth" className="navigation__link" activeClassName='active-nav'>
				Sign In</NavLink>
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

const mapDispatchToProps = {
  logOut
}
export default connect(mapStateToProps, mapDispatchToProps)(Navigation)
