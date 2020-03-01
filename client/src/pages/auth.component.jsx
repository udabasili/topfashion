import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faKey, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import validator from '../components/validator';
import { AuthFunction } from '../redux/actions/user.actions';
import { removeError } from '../redux/actions/error.actions';



class Auth extends Component {
    state={
        loggedIn:false,
        auth:"login",
        error:null,
        loginData: {
          email: "",
          password: "",
        },
        registerData: {
          username: {
            value: ''
          },
          email: {
            validated: false,
            value: '',
            focused:false
          },
          password: {
            validated: false,
            value: '',
            focused:false

          },
          confirmPassword: {
            validated: false,
            value: '',
            focused:false
            },
          },

    }

    componentWillUnmount(){
      this.props.removeError()
    }

    //update state based on name to input
    onChangeHandlerLogin= (e) =>{
      let {name, value} = e.target;
      this.setState((prevState)=>({
        ...prevState,
        loginData:{
          ...prevState.loginData,
          [name]:value
        }
      }))
    }
    //handle the onchange for Register state
    onChangeHandlerRegister = (e) =>{
    const {name, value} = e.target;
    this.setState((prevState)=>({
        ...prevState,
        registerData: {
        ...prevState.registerData,
        [name]: ({
          ...prevState.registerData[name],
          value: value,
          validated: validator(name, 
            name === "confirmPassword" ?  {
              password:this.state.registerData.password.value,
              confirm: value
              } : value)
          })
        }
      })
    )
  }

  onFocusHandler = (e) =>{
    const {name} = e.target
    this.setState((prevState)=>({
      validation: {
        ...prevState.validation,
        [name]: ({
          ...prevState.validation[name],
          focused: true
          })
        }
      })
    )
  }

  onBlurHandler = (e) =>{
    const {name} = e.target
    this.setState((prevState)=>({
      validation: {
        ...prevState.validation,
        [name]: ({
          ...prevState.validation[name],
          focused: false
          })
        }
      })
    )
  }

  onSubmitHandler = (e) =>{
      let userData = {
          username:this.state.registerData.username.value,
          email:this.state.registerData.email.value,
          password: this.state.registerData.password.value,
          confirmPassword: this.state.registerData.confirmPassword.value,
        }
        
      e.preventDefault()


      switch (this.state.auth) {
        case "register":
          this.props.AuthFunction(this.state.auth, userData)
            .then((response) =>{
              console.log("here");
              
              this.props.history.push("/")
                })
          break;
        case "login":
          this.props.AuthFunction(this.state.auth, this.state.loginData).then(()=>{
            this.props.history.push("/")
          })
            
          break;
        default:
          break;
      }
      
    }

  

    changeAuthState = (value)=>{
      this.setState({auth:value})
      this.props.removeError()
    }

  render() {
    const { error,history, removeError } = this.props;
    const{auth, registerData, loginData } = this.state;
    //if there is any change in route remove previous error
    history.listen(() =>{
       removeError()
    })

    return (
      <div className="auth">
      <section className="auth__left-section"></section>
      <section className="auth__right-section">
      <div className="alert-error">{
          error.error === "Email doesn't exist. Please Register" ? 
          <div>
          <span>Email doesn't exist. Please </span>
          <span 
            className="switch-auth" 
            style={{color:"blue", cursor:"pointer"}} 
            onClick={()=>this.changeAuthState("register")}> Register </span>
          </div>
           :
          error.error
          }</div>
      <form className="form" onSubmit={this.onSubmitHandler} >
        {(auth === "register") ?
          <div>
            <div className="form__component">
              <i className="form__group__icon"><FontAwesomeIcon icon={faUser}/></i>
              <div className="form__group">
                <input 
                  type="text" 
                  name="username" 
                  onChange={this.onChangeHandlerRegister} 
                  value={registerData.username.value}
                  className="form__input" required/>
                <label htmlFor="username" className="form__label">
                  Username
                </label>
              </div>
            </div>
            <div className="form__component">
              <i className="form__group__icon">
                <FontAwesomeIcon icon={faEnvelope}/>
              </i>
              <div className="form__group">
                <input 
                  type="email"  
                  onChange={this.onChangeHandlerRegister}
                  value={registerData.email.value}
                  style={{color : registerData.email.validated ? "black" : "red"}}
                    name="email" 
                    className="form__input" required/>
                    <label htmlFor="email" className="form__label">Email</label>
                </div>
                </div>
            <div className="form__component">
                <i className="form__group__icon"><FontAwesomeIcon icon={faKey}/></i>
                <div className="form__group">
                    <input 
                    type="password" 
                    name="password" 
                    onChange={this.onChangeHandlerRegister}
                    style={{color : registerData.password.validated ? "black" : "red"}}
                    value={registerData.password.value}
                    className="form__input" required/>
                    <label htmlFor="password" className="form__label">
                    <span>Password</span>
                    <span>(Must be at least 7 characters)</span>
                    </label>
                </div>
                </div>
                <div className="form__component">
                <i className="form__group__icon">
                    <FontAwesomeIcon icon={faKey}/>
                </i>
                <div className="form__group">
                <input 
                type="password" 
                name="confirmPassword" 
                onChange={this.onChangeHandlerRegister}
                style={{color : registerData.confirmPassword.validated ? "black" : "red"}}
                value={registerData.confirmPassword.value}
                className="form__input" required/>
                <label htmlFor="confirm-password" className="form__label">Confirm Password</label>
            </div>
            </div>
        </div> :
        <div>
            <div className="form__component">
            <i className="form__group__icon">
                <FontAwesomeIcon icon={faEnvelope}/>
            </i>
            <div className="form__group">
                <input 
                type="email"  
                onChange={this.onChangeHandlerLogin}
                value={loginData.email}
                name="email" 
                className="form__input" required/>
                <label htmlFor="email" className="form__label">Email</label>
            </div>
            </div>
            <div className="form__component">
            <i className="form__group__icon"><FontAwesomeIcon icon={faKey}/></i>
            <div className="form__group">
                <input 
                type="password" 
                name="password" 
                onChange={this.onChangeHandlerLogin}
                value={loginData.password}
                className="form__input" required/>
                <label htmlFor="password" className="form__label">Password</label>
            </div>
            </div>
        </div>
        }
        <input type="submit" className="form-submit-button" value="Submit"/>
      </form>
      {(auth === "login") &&
        <div className="login-signup">
            <span>Not Registered Already? </span>
            <span className="switch-auth" onClick={() => this.changeAuthState("register")}>Register</span>
          </div>
        }
      </section>
        
        
        
      </div>
        
    )
  }
}


const mapStateToProp = state =>({
  error : state.error
})


export default withRouter(connect(mapStateToProp, {AuthFunction, removeError })(Auth))