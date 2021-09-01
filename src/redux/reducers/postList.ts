import * as types from "../../constants";
import {PostType} from "../../types/post";
/*
const getPosts = (): PostType | undefined => {
    const posts = localStorage.getItem("posts");
    if (posts) {
        return JSON.parse(posts);
    } else {
        return undefined;
    }
};
*/
const initialState = {
    posts: {
        total: 0,
        data: []
    }
};

export default function reducer(
    state = initialState,
    actions: any
): {posts: any} {
    switch (actions.type) {
        case types.POST_LIST_SUCCESS:
            return {
                ...state,
                posts: {
                    total: actions.total,
                    data: [...state.posts.data, ...actions.data]
                }
            };
        case types.POST_CREATE_SUCCESS:
            return {
                ...state,
                posts: {
                    ...actions
                }
            };
        case types.POST_UPDATE_SUCCESS:
            return {
                ...state,
                posts: {
                    ...actions
                }
            };
        default:
            return state;
    }
}