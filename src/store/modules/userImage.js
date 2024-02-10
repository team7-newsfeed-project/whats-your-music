// duck pattern
import defaultImage from "assets/defaultImage.png";

// Action value
const SET_SELECTFILE = "SET_SELECTFILE";
const SET_THUMNAILIMG = "SET_THUMNAILIMG";

// Action creator

export const setSelectFile = (selectFile) => {
    return {
        type: SET_SELECTFILE,
        payload: selectFile,
    };
};

export const setThumnailImg = (thumnailImg) => {
    return {
        type: SET_THUMNAILIMG,
        payload: thumnailImg,
    };
};

// 초기 상태값
const initialState = { user: {}, selectFile: defaultImage, thumnailImg: defaultImage };

// 리듀서
const userImage = (state = initialState, action) => {
    switch (action.type) {
        case SET_SELECTFILE:
            return {
                ...state,
                selectFile: action.payload,
            };
        case SET_THUMNAILIMG:
            return {
                ...state,
                thumnailImg: action.payload,
            };
        default:
            return state;
    }
};

export default userImage;
