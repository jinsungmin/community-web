import * as types from "../../constants";
import {PostType} from '../../types/post'


export type PostDetailType = {
    post: PostType | undefined;
};

const getPost = (): PostType | undefined => {
    const post = localStorage.getItem("post");
    if (post) {
        return JSON.parse(post);
    } else {
        return undefined;
    }
};

const initialState = {
    post: getPost(),
};

export default function reducer(
    state: PostDetailType = initialState,
    actions: PostType & { type: string }
): PostDetailType {
    switch (actions.type) {
        case types.POST_DETAIL_SUCCESS:
            return {
                ...state,
                post: {
                    ...actions
                }
            };
        case types.POST_DETAIL_FAILURE:
            return {
                ...state,
                post: undefined
            };
        default:
            return state;
    }
}