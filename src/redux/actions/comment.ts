import * as types from "../../constants";
import {AppDispatchType} from "../store";
import {
    CommentType,
    CreateType,
    FindAllType
} from "../../types/comment";
import {
    findAll,
    findOne,
    create
} from "../../services/commentService";

export function getComments(credentials: FindAllType) {
    return async (dispatch: AppDispatchType) => {
        dispatch({type: types.COMMENT_LIST_REQUEST});

        return findAll(credentials)
            .then((res: any) => {
                if (res.data.data.length) {
                    dispatch({
                        type: types.COMMENT_LIST_SUCCESS,
                        ...res.data
                    });
                }
            })
            .catch(async (error) => {
                dispatch({type: types.COMMENT_LIST_FAILURE});
                throw error;
            });
    }
}

export function getCommentsInit(credentials: FindAllType) {
    return async (dispatch: AppDispatchType) => {
        dispatch({type: types.COMMENT_LIST_INIT_REQUEST});

        return findAll(credentials)
            .then((res: any) => {
                dispatch({
                    type: types.COMMENT_LIST_INIT_SUCCESS,
                    ...res.data
                });
            })
            .catch(async (error) => {
                dispatch({type: types.COMMENT_LIST_INIT_FAILURE});
                throw error;
            });
    }
}

export function createComment(credentials: CreateType) {
    return async (dispatch: AppDispatchType) => {
        dispatch({type: types.COMMENT_CREATE_REQUEST});

        return create(credentials)
            .then((res: any) => {
                if(!res.data.parentId) {
                    dispatch({
                        type: types.COMMENT_CREATE_SUCCESS,
                        ...res.data
                    });
                }
            })
            .catch(async (error) => {
                dispatch({type: types.COMMENT_CREATE_FAILURE});
                throw error;
            });
    }
}

export function getComment(id:number) {
    return async (dispatch: AppDispatchType) => {
        dispatch({type: types.COMMENT_DETAIL_REQUEST});

        return findOne(id)
            .then((res: any) => {
                dispatch({
                    type: types.COMMENT_DETAIL_SUCCESS,
                    ...res.data
                });
            })
            .catch(async (error) => {
                dispatch({type: types.COMMENT_DETAIL_FAILURE});
                throw error;
            });
    }
}
