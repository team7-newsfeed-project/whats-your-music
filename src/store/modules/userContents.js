// duck pattern
// Action value

// Action creator
// 초기 상태값
const initialState = {
    initUserInfo: { nickname: "", comment: "" },
    db: [],
};

// 리듀서
const userContents = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default userContents;
