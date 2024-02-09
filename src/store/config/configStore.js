import { createStore } from "redux";
import { combineReducers } from "redux";
import userId from "store/modules/userId";
import category from "store/modules/category";
import posts from "store/modules/posts";
import userAccount from "store/modules/userAccount";

const rootReducer = combineReducers({
    userId,
    userAccount,
    category,
    posts,
});
const store = createStore(rootReducer);

export default store;
