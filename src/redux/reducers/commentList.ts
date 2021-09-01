import * as types from "../../constants";
import {CommentType} from "../../types/comment";

/*
const getComments = (): CommentType | undefined => {
    const comments = localStorage.getItem("comments");
    if (comments) {
        return JSON.parse(comments);
    } else {
        return undefined;
    }
};
/*/

const initialState = {
    comments: {
        total: 0,
        data: []
    }
};

export default function reducer(
    state: any = initialState,
    actions: any
): any {
    switch (actions.type) {
        case types.COMMENT_LIST_SUCCESS:
            return {
                ...state,
                comments: {
                    total: actions.total,
                    data: [...state.comments.data, ...actions.data]
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