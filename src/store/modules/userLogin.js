import { auth } from "database/firebase";

const SET_ID = "SET_ID";
const SET_IS_LOGIN = "SET_IS_LOGIN";

export const setId = (payload) => {
    return {
        type: SET_ID,
        payload,
    };
};

export const setUserLogin = (user) => {
    return {
        type: SET_IS_LOGIN,
        payload: user,
    };
};

const initialState = {
    id: "",
    userLogin: null,
    isLogin: false,
};

const userId = (state = initialState, action) => {
    switch (action.type) {
        case SET_ID:
            return {
                id: action.payload,
            };
        case SET_IS_LOGIN:
            return {
                ...state,
                userLogin: action.payload,
                isLogin: true,
            };
        default:
            return state;
    }
};

export default userId;
