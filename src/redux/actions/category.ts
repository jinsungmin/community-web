import * as types from "../../constants";
import {AppDispatchType} from "../store";
import {
    CategoryType,
    FindAllType
} from "../../types/category";
import {
    findAll,
    findOne
} from "../../services/categoryService";

export function getCategories(credentials: FindAllType) {
    return async (dispatch: AppDispatchType) => {
        dispatch({type: types.CATEGORY_LIST_REQUEST});

        return findAll(credentials)
            .then((res: any) => {
                console.log(res)

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
