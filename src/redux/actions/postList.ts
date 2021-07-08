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
    create,
    updateOne,
    deleteOne
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

export function createPosts(credentials: CreateType) {
    return async (dispatch: AppDispatchType) => {
        dispatch({type: types.POST_CREATE_REQUEST});

        return create(credentials)
            .then((res: any) => {
                console.log(res)
                dispatch({
                    type: types.POST_CREATE_SUCCESS,
                    ...res.data
                });
            })
            .catch(async (error) => {
                dispatch({type: types.POST_CREATE_FAILURE});
                throw error;
            });
    }
}
