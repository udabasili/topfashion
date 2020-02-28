import { ADD_ERROR, REMOVE_ERROR } from "../actionTypes"

const INITIAL_STATE = {
    error: null
}

export default function errorReducer(state=INITIAL_STATE, action){
    switch (action.type) {
        case ADD_ERROR:
            return{
                ...state,
                error: action.payload
            }
        
            case REMOVE_ERROR:
                return{
                    ...state,
                    error:null
                }
    
        default:
            return state;
    }

}