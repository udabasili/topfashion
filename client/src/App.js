import React from 'react';
import Home from './pages/home.component';
import Navigation from './components/navigation';
import {Route, withRouter, Switch} from "react-router-dom";
import Auth from "./pages/auth.component";
import { connect } from 'react-redux';
import { verifyUser, logOut,  } from './redux/actions/user.actions';
import Shop from './pages/shop-page.component';
import CheckOut from './pages/checkout.component';
import PrivateRoute from './components/protected-route.component';


class App extends React.Component {

  componentDidMount() {    
    this.props.verifyUser().then(async()=>{   

      })
      .catch(() =>{
    })  
  }

  

  render(){
  return (
    <div className="App">
      <Navigation/>
      <Switch>
        <Route  exact path='/' component={Home}/>
        <Route exact path="/auth" component={Auth}/>
        <Route path="/shop" component={Shop}/>  
        <PrivateRoute exact path="/checkout" component={CheckOut}/>  
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
  logOut: () => dispatch(logOut())
})

export default withRouter(connect(mapStateToProps , mapDispatchToProps)(App));
