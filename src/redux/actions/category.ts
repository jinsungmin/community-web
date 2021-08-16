import * as types from "../../constants";
import {AppDispatchType} from "../store";
import {
    FindAllType
} from "../../types/category";
import {
    findAll
} from "../../services/categoryService";

export function getCategories(credentials: FindAllType) {
    return async (dispatch: AppDispatchType) => {
        dispatch({type: types.CATEGORY_LIST_REQUEST});

        return findAll(credentials)
            .then((res: any) => {
                dispatch({
                    type: types.CATEGORY_LIST_SUCCESS,
                    ...res.data
                });
            })
            .catch(async (error) => {
                dispatch({type: types.CATEGORY_LIST_FAILURE});
                throw error;
            });
    }
}
