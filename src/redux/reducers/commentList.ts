import * as types from "../../constants";
import {CommentType} from "../../types/comment";

const getComments = (): CommentType | undefined => {
    const comments = localStorage.getItem("comments");
    if (comments) {
        return JSON.parse(comments);
    } else {
        return undefined;
    }
};

const initialState = {
    comments: getComments()
};

export default function reducer(
    state: {comments: CommentType | undefined} = initialState,
    actions: CommentType & {type: string}
): {comments: CommentType | undefined} {
    switch (actions.type) {
        case types.COMMENT_LIST_SUCCESS:
            console.log(actions)
            return {
                ...state,
                comments: {
                    ...actions
                }
            };
        case types.COMMENT_CREATE_SUCCESS:
            return {
                ...state,
                comments: {
                    ...actions
                }
            };
        case types.COMMENT_UPDATE_SUCCESS:
            return {
                ...state,
                comments: undefined
            };
        default:
            return state;
    }
}