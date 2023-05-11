import { combineReducers } from "redux";
import { UserState } from "../types/user";
import userReducers from "./reducers/userReducers";

export interface AppState {
user:UserState;
// categories:any;
// records:any;
}

const rootReducer=combineReducers<AppState>({
    user:userReducers
    // categories:()=>{},
    // records:()=>{}
})
export default rootReducer;