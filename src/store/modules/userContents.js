// duck pattern
// Action value
const SET_EDITVALUE = "userContents/SET_EDITVALUE";
// Action creator
export const setEditValue = (editValue) => {
    return {
        type: SET_EDITVALUE,
        payload: editValue,
    };
};
// 초기 상태값
const initialState = {
    initUserInfo: { nickname: "", comment: "" },
    editValue: { nickname: "", comment: "" },
    db: [],
};

// 리듀서
const userContents = (state = initialState, action) => {
    switch (action.type) {
        case SET_EDITVALUE:
            return {
                ...state,
                editValue: { ...state.editValue, ...action.payload },
            };
        default:
            return state;
    }
};

export default userContents;
