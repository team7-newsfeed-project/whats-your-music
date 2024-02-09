import { createStore } from "redux";
import { combineReducers } from "redux";
import userId from "store/modules/userId";
import category from "store/modules/category";
import posts from "store/modules/posts";

const rootReducer = combineReducers({
    userId,
    category,
    posts,
});
const store = createStore(rootReducer);

export default store;
