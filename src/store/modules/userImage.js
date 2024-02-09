// duck pattern
import defaultImage from "assets/defaultImage.png";

// Action value
const SET_IMAGE = "SET_IMAGE";

// Action creator

export const setImage = (image) => {
    return {
        type: SET_IMAGE,
        payload: image,
    };
};

// 초기 상태값
const initialState = { fileImage: defaultImage };

// 리듀서
const userImage = (state = initialState, action) => {
    switch (action.type) {
        case SET_IMAGE:
            return {
                fileImage: action.payload,
            };
        default:
            return state;
    }
};

export default userImage;
