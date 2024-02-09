import { createStore } from "redux";
import { combineReducers } from "redux";
import userId from "store/modules/userId";
import category from "store/modules/category";
import userAccount from "store/modules/userAccount";

const rootReducer = combineReducers({
    userId,
    userAccount,
    category,
});
const store = createStore(rootReducer);

export default store;
