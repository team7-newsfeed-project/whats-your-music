// duck pattern
import defaultImage from "assets/defaultImage.png";

// Action value
const SET_IMAGE = "SET_IMAGE";
const SET_USER = "SET_USER";

// Action creator

export const setImage = (image) => {
    return {
        type: SET_IMAGE,
        payload: image,
    };
};

export const setUser = (userInfo) => {
    return {
        type: SET_USER,
        payload: userInfo,
    };
};

// 초기 상태값
const initialState = { fileImage: defaultImage, user: {} };

// 리듀서
const userImage = (state = initialState, action) => {
    switch (action.type) {
        case SET_IMAGE:
            return {
                fileImage: action.payload,
            };
        case SET_USER:
            return {
                user: action.payload,
            };
        default:
            return state;
    }
};

export default userImage;
