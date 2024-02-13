const SET_ACCOUNT = "userAccount/SET_ACCOUNT";
const SET_LOGOUT = "SET_LOGOUT";

export const setAccount = (payload) => {
    return {
        type: SET_ACCOUNT,
        payload,
    };
};
export const setUserLogout = (payload) => {
    return {
        type: SET_LOGOUT,
        payload,
    };
};

const initialState = {
    firebaseId: "",
    email: "",
    nickname: "",
    comment: "",
    image: "",
    isLoggedIn: false,
};

const userAccount = (state = initialState, action) => {
    switch (action.type) {
        case SET_ACCOUNT:
            return { ...state, ...action.payload };
        case SET_LOGOUT:
            return initialState;

        default:
            return state;
    }
};

export default userAccount;
