import { combineReducers } from "redux";
import usersReducer from "./reducers";


const rootReducer = combineReducers({
    usersData: usersReducer
})


export default rootReducer