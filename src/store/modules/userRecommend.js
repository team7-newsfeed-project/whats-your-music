// duck pattern
// Action value
const SET_MYRECOMMEND = "SET_MYRECOMMEND";
// Action creator
export const setMyRecommend = (recommendContents) => {
    return {
        type: SET_MYRECOMMEND,
        payload: recommendContents,
    };
};

// 초기 상태값
const initialState = [];

// 리듀서
const example = (state = initialState, action) => {
    console.log(action.payload);
    switch (action.type) {
        case SET_MYRECOMMEND:
            return [...action.payload];
        default:
            return state;
    }
};

export default example;
