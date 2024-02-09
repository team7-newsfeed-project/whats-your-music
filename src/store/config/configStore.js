import { createStore } from "redux";
import { combineReducers } from "redux";
import userId from "store/modules/userId";
import category from "store/modules/category";
import userImage from "store/modules/userImage";

const rootReducer = combineReducers({
    userId,
    category,
    userImage,
});
const store = createStore(rootReducer);

export default store;
