import {ADD_ERROR, REMOVE_ERROR} from "../actionTypes"

const addError = (error) =>({
    type: ADD_ERROR,
    payload: error
})

const removeError = () =>({
    type: REMOVE_ERROR
})