const SET_CATEGORY = "category/SET_CATEGORY";

export const setCategory = (payload) => {
    return { type: SET_CATEGORY, payload };
};

const initialState = "팝";

const category = (state = initialState, action) => {};
switch (action.type) {
    case SET_CATEGORY:
        const activeCategory = action.payload;
        return activeCategory;
    default:
        return state;
}

export default category;
