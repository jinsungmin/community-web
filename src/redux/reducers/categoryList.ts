import * as types from "../../constants";
import {CategoryType} from "../../types/category";

const getCategories = (): CategoryType | undefined => {
    const categories = localStorage.getItem("categories");
    if (categories) {
        return JSON.parse(categories);
    } else {
        return undefined;
    }
};

const initialState = {
    categories: getCategories()
};

export default function reducer(
    state: {categories: CategoryType | undefined} = initialState,
    actions: CategoryType & {type: string}
): {categories: CategoryType | undefined} {
    switch (actions.type) {
        case types.CATEGORY_LIST_SUCCESS:
            return {
                ...state,
                categories: {
                    ...actions
                }
            };
        default:
            return state;
    }
}