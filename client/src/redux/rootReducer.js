import {combineReducers} from "redux";
import userReducer from "./reducers/user.reducer";
import storage from "redux-persist/lib/storage";
import {persistReducer} from "redux-persist";
import errorReducer from "./reducers/error.reducer";


const persistConfig = {
    key: "root",
    storage
}
const rootReducer = combineReducers({
    user: userReducer,
    error: errorReducer

}) 

export default persistReducer(persistConfig, rootReducer)