import { createStore } from "redux";
import { combineReducers } from "redux";
import userId from "store/modules/userId";

const rootReducer = combineReducers({
    userId,
});
const store = createStore(rootReducer);

export default store;
