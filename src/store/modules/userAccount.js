const SET_ACCOUNT = "userAccount/SET_ACCOUNT";
const SET_IS_LOGIN = "userAccount/SET_IS_LOGIN";
const SET_LOGOUT = "userAccount/SET_LOGOUT";

export const setAccount = (payload) => {
    return {
        type: SET_ACCOUNT,
        payload,
    };
};

export const setUserLogout = () => {
    return {
        type: SET_LOGOUT,
    };
};

const initialState = {
    firebaseId: "",
    email: "",
    nickname: "",
    comment: "",
    image: "",
    isLoggedIn: false,
    userUid: "",
};

const userAccount = (state = initialState, action) => {
    console.log("action.payload=>", action.payload);
    switch (action.type) {
        case SET_ACCOUNT:
            return { ...state, ...action.payload };

        case SET_LOGOUT:
            return {
                ...state,
                firebaseId: "",
                email: "",
                nickname: "",
                comment: "",
                image: "",
                isLoggedIn: false,
                userUid: "",
            };

        default:
            return state;
    }
};

export default userAccount;
