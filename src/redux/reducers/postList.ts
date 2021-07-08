import * as types from "../../constants";
import {PostType} from "../../types/post";

const getPosts = (): PostType | undefined => {
    const posts = localStorage.getItem("posts");
    if (posts) {
        return JSON.parse(posts);
    } else {
        return undefined;
    }
};

const initialState = {
    post: getPosts()
};

export default function reducer(
    state: {post: PostType | undefined} = initialState,
    actions: PostType & {type: string}
): {post: PostType | undefined} {
    switch (actions.type) {
        case types.POST_LIST_SUCCESS:
            return {
                ...state,
                post: {
                    ...actions
                }
            };
        case types.POST_CREATE_SUCCESS:
            return {
                ...state,
                post: {
                    ...actions
                }
            };
        case types.POST_UPDATE_SUCCESS:
            return {
                ...state,
                post: undefined
            };
        default:
            return state;
    }
}