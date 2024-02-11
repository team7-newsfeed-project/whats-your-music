const SET_ACCOUNT = "userAccount/SET_ACCOUNT";
const SET_IS_LOGIN = "userAccount/SET_IS_LOGIN";
const SET_LOGOUT = "userAccount/SET_LOGOUT";

export const setAccount = (payload) => {
    return {
        type: SET_ACCOUNT,
        payload,
    };
};
export const setUserLogin = (user) => {
    return {
        type: SET_IS_LOGIN,
        payload: user,
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
    userLoginState: {
        userUid: "",
        email: "",
        nickname: "",
        comment: "",
        image: "",
        isLoggedIn: false,
    },
};

const userAccount = (state = initialState, action) => {
    switch (action.type) {
        case SET_ACCOUNT:
            return { ...state, ...action.payload };
        case SET_IS_LOGIN:
            const userInfo = action.payload;
            console.log(userInfo);
            return {
                ...state,
                userLoginState: {
                    userUid: userInfo.uid,
                    email: userInfo.email,
                    nickname: userInfo.displayName,
                    comment: "",
                    image: userInfo.photoURL,
                    isLoggedIn: true,
                },
            };
        case SET_LOGOUT:
            return {
                ...state,
                userLoginState: {
                    userUid: "",
                    email: "",
                    nickname: "",
                    comment: "",
                    image: "",
                    isLoggedIn: false,
                },
            };

        default:
            return state;
    }
};

export default userAccount;
