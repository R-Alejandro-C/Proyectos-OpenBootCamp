import {combineReducers} from "redux"
import { todosReducer } from "./todosReducer"
import { filterReducer } from "./filterReducer"
import { useReducer } from "./userReducer"
export const rootReducer = combineReducers(
    {
        todosState: todosReducer,
        filterState: filterReducer,
        userState: useReducer,
    }
)