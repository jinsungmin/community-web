import * as types from "../../constants";
import {AppDispatchType} from "../store";
import {
    CommentType,
    CreateType,
    UpdateType,
    FindAllType
} from "../../types/comment";
import {
    findAll,
    findOne
} from "../../services/commentService";

export function getComments(credentials: FindAllType) {
    return async (dispatch: AppDispatchType) => {
        dispatch({type: types.COMMENT_LIST_REQUEST});

        console.log(credentials)
        return findAll(credentials)
            .then((res: any) => {
                console.log(res)

                dispatch({
                    type: types.COMMENT_LIST_SUCCESS,
                    ...res.data
                });
            })
            .catch(async (error) => {
                dispatch({type: types.COMMENT_LIST_FAILURE});
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
