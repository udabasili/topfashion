import { SET_CURRENT_USER } from "../actionTypes";

const INITIAL_STATE = {
    currentUser: null,
    isAuthenticated: null,   
}

export default function userReducer (state=INITIAL_STATE, action){
    switch (action.type) {
        case SET_CURRENT_USER:
            return{
                ...state,
                currentUser: action.payload,
                isAuthenticated: Object.keys(action.payload).length > 0

            }
                
        default:
            return state
    }
}