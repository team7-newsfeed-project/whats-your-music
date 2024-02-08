import { createStore } from "redux";
import { combineReducers } from "redux";
import userId from "store/modules/userId";
import category from "store/modules/category";

const rootReducer = combineReducers({
    userId,
    category,
});
const store = createStore(rootReducer);

export default store;
