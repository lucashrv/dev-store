import { combineReducers } from "redux";

//Reducer
import cartReducer from "./cart/reducer";

const rootReducer = combineReducers({
    cartReducer
})

export default rootReducer