// duck pattern
// Action value
const SET_EDITVALUE = "userContents/SET_EDITVALUE";
const SET_INITUSERINFO = "SET_INITUSERINFO";
// Action creator
export const setEditValue = (editValue) => {
    return {
        type: SET_EDITVALUE,
        payload: editValue,
    };
};
export const setInitValue = (editValue) => {
    return {
        type: SET_EDITVALUE,
        payload: editValue,
    };
};
// 초기 상태값
const initialState = {
    initUserInfo: { nickname: "", comment: "" },
};

// 리듀서
const userContents = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITUSERINFO:
            const newInfo = action.payload;
            return {
                initUserInfo: newInfo,
            };
        case SET_EDITVALUE:
            return {
                ...state,
                initUserInfo: action.payload,
                editValue: action.payload,
            };
        default:
            return state;
    }
};

export default userContents;
