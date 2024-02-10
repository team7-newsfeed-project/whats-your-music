// duck pattern
// Action value

// Action creator
// 초기 상태값
const initialState = {
    initUserInfo: { dbId: 2, nickname: "", comment: "" },
    dbUserInfo: [
        {
            dbId: 1,
            nickname: "해리2",
            comment: "난 재즈가 좋아",
        },
    ],
};

// 리듀서
const userContents = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default userContents;
