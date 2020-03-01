import SHOP_DATA from "../utils/shop.data"


const INITIAL_STATE = {
    item: SHOP_DATA
}

export default function categoryReducer(state=INITIAL_STATE, action){
    switch (action.type) {
        default:
            return state;
    }

}