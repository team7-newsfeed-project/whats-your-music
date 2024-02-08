const SET_ID = "SET_ID";

export const setId = (payload) => {
    return {
        type: SET_ID,
        payload,
    };
};

const initialState = {
    id: "",
};

const userId = (state = initialState, action) => {
    switch (action.type) {
        case SET_ID:
            return {
                id: action.payload,
            };
        default:
            return state;
    }
};

export default userId;
