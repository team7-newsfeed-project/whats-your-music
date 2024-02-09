// duck pattern
import defaultImage from "assets/defaultImage.png";

// Action value

// Action creator

// 초기 상태값
const initialState = defaultImage;

// 리듀서
const example = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default example;
