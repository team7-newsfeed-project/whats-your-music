const SET_ACCOUNT = "userAccount/SET_ACCOUNT";

export const setAccount = (payload) => {
    return {
        type: SET_ACCOUNT,
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
    console.log("action.payload=>", action.payload);

    switch (action.type) {
        case SET_ACCOUNT:
            return { ...state, ...action.payload };

        default:
            return state;
    }
};

export default userAccount;
