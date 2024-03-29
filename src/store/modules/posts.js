const SET_POST = "posts / SET_POST";
const ADD_POST = "posts/ADD_POST";
const EDIT_POST = "posts/EDIT_POST";
const DELETE_POST = "posts/DELETE_POST";

export const setPost = (payload) => {
    return { type: SET_POST, payload };
};
export const addPost = (payload) => {
    return { type: ADD_POST, payload };
};
export const editPost = (payload) => {
    return { type: EDIT_POST, payload };
};
export const deletePost = (payload) => {
    return { type: DELETE_POST, payload };
};

const initialState = [
    {
        id: "",
        category: "",
        nickname: "",
        title: "  ",
        content: "  !",
        date: new Date().toISOString(),
        videoSrc: "",
    },
];

const posts = (state = initialState, action) => {
    switch (action.type) {
        case SET_POST:
            const setPosts = action.payload;
            return setPosts;
        case ADD_POST:
            const newPost = action.payload;
            return [newPost, ...state];
        case EDIT_POST:
            const { id, editedContent } = action.payload;
            return state.map((post) => {
                if (post.id === id) {
                    return { ...post, content: editedContent };
                }
                return post;
            });
        case DELETE_POST:
            const postId = action.payload;
            return state.filter((post) => post.id !== postId);
        default:
            return state;
    }
};

export default posts;
