import React from 'react';
import Home from './pages/home.component';
import Navigation from './components/navigation';
import {Route, withRouter, Switch, Redirect} from "react-router-dom";
import Auth from "./pages/auth.component";
import { connect } from 'react-redux';
import { verifyUser, logOut, setTokenHeader,  } from './redux/actions/user.actions';
import Shop from './pages/shop-page.component';
import CheckOut from './pages/checkout.component';
import PrivateRoute from './components/protected-route.component';
import { removeError } from './redux/actions/error.actions';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import NotFoundPage from './components/not-found';

if (localStorage.getItem("validator")) {  
  setTokenHeader(localStorage.getItem("validator"));
  
}

class App extends React.Component { 

  componentWillMount(){
    this.props.removeError()
  }

  render(){
    const {currentUser} =this.props

  return (
    <div className="App">
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover={false}
        />
      <Navigation/>
      <Switch>
        <Route  exact path='/' component={Home}/>
        <Route  path="/auth" render={(props) => ( localStorage.getItem("validator") && currentUser
          ? 
          <div>
            <Redirect to={{
              pathname:"/",
              state:{from: props.location}
              }}
            />
        </div>
        : 
        <Auth {...props} />
          )}/>
        <Route path="/shop" component={Shop}/>  
        <PrivateRoute exact path="/checkout" component={CheckOut}/>  
        <Route path='/404' component={NotFoundPage}/>
        <Redirect to='/404'/>
      </Switch>
     
    </div>
  );
  }
}


const mapStateToProps = state => ({
  currentUser: state.user
})

const mapDispatchToProps = dispatch => ({
  verifyUser: () => dispatch(verifyUser()),
  logOut: () => dispatch(logOut()),
  removeError: () => dispatch(removeError())

})

export default withRouter(connect(mapStateToProps , mapDispatchToProps)(App));
