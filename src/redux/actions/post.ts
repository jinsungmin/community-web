import * as types from "../../constants";
import {AppDispatchType} from "../store";
import {
    PostType,
    CreateType,
    UpdateType,
    FindAllType
} from "../../types/post";
import {
    findAll,
    findOne
} from "../../services/postService";

export function getPosts(credentials: FindAllType) {
    return async (dispatch: AppDispatchType) => {
        dispatch({type: types.POST_LIST_REQUEST});

        return findAll(credentials)
            .then((res: any) => {
                console.log(res)

                dispatch({
                    type: types.POST_LIST_SUCCESS,
                    ...res.data
                });
            })
            .catch(async (error) => {
                dispatch({type: types.POST_LIST_FAILURE});
                throw error;
            });
    }
}

export function getPost(id:number) {
    return async (dispatch: AppDispatchType) => {
        dispatch({type: types.POST_DETAIL_REQUEST});

        return findOne(id)
            .then((res: any) => {
                dispatch({
                    type: types.POST_DETAIL_SUCCESS,
                    ...res.data
                });
            })
            .catch(async (error) => {
                dispatch({type: types.POST_DETAIL_FAILURE});
                throw error;
            });
    }
}
