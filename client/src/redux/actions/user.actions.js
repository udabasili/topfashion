import {SET_CURRENT_USER} from "../actionTypes";
import { restApi, TokenHeader } from "../../services/api";
import { addError, removeError } from "./error.actions";
import { getUserCartItems } from "./cart.actions";

const setCurrentUser = (user) =>({
    type:SET_CURRENT_USER,
    payload:user
})

export function setTokenHeader(token){    
    TokenHeader(token)
}

export function logOut (){
    return dispatch =>{
        return new Promise((res, rej) =>{
            localStorage.clear()
            TokenHeader(false)
            dispatch(setCurrentUser({}))
            dispatch(getUserCartItems([]))
            return res()
        })
        
    }

}


export const AuthFunction = (auth, user) =>{
    return dispatch =>{
        return new Promise((resolve, reject) =>{
            return restApi("post", `/auth/${auth.toLowerCase()}`,user)
                .then((response) =>{
                    setTokenHeader(response.token)                          
                    dispatch(removeError())
                    dispatch(setCurrentUser(response.user))
                    localStorage.setItem("userId", response.user._id);
                    localStorage.setItem("validator", response.token)
                    dispatch(getUserCartItems(response.user.cartItems))              
                    return resolve(response.user.username)

                })
                .catch((error) =>{                    
                    dispatch(addError(error.message))
                    return reject()
                })
        })
    }
}

export function verifyUser () { 
    let token = localStorage.validator;
    setTokenHeader(token)
    return dispatch =>{
        return new Promise((resolve, reject)=>{    
            return restApi("get", "/authenticate-user")
            .then((response) =>{      
                setTokenHeader(response.token)                                                          
                dispatch(removeError())
                dispatch(setCurrentUser(response.user))
                localStorage.setItem("userId", response.user._id);
                localStorage.setItem("validator", response.token)
                return resolve(response.user.username)
            })
            .catch((error)=>{                
                setTokenHeader(false)
                localStorage.removeItem("validator")
                localStorage.removeItem("userId")
                dispatch(addError("Please Login again"))
                return reject()
            })
        })
    }
}    