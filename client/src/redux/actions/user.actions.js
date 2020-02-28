import {SET_CURRENT_USER} from "../actionTypes";
import { restApi, TokenHeader } from "../../services/api";

const setCurrentUser = (user) =>({
    type:SET_CURRENT_USER,
    payload:user
})

export const setTokenHeader = (token) =>{
    TokenHeader(token)
}



export const AuthFunction = (auth, user) =>{
    return dispatch =>{
        return new Promise((resolve, reject) =>{
            return restApi("post", `/auth/${auth.toLowerCase()}`,user)
                .then((response) =>{
                    dispatch(setCurrentUser(response.user))
                    sessionStorage.setItem("userId", response.user._id);
                    sessionStorage.setItem("validator", response.token)
                    setTokenHeader(response.token)                    
                    return resolve(response.user.username)

                })
                .catch((error) =>{
                    console.log(error);
                    
                    return reject()
                })
        })
    }
}