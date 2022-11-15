import { combineReducers } from "redux";
import lists from "./lists";
import details from "./details";

export default combineReducers({
    lists,
    details
})