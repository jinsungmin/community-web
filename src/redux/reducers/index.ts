import { combineReducers } from "redux";

import authReducer from "./auth";
import userReducer from './user';
import postListReducer from './postList';
import postDetailReducer from './postDetail';
import commentListReducer from './commentList';
import categoryListReducer from './categoryList';

export const rootReducer = combineReducers({
    authReducer,
    userReducer,
    categoryListReducer,
    postListReducer,
    postDetailReducer,
    commentListReducer
});

type RootReducerType = typeof rootReducer;

type AppStateType = ReturnType<RootReducerType>;

export const getAuthReducer = (state: AppStateType) => state.authReducer;
export const getUserReducer = (state: AppStateType) => state.userReducer;
export const getPostListReducer = (state: AppStateType) => state.postListReducer;
export const getPostDetailReducer = (state: AppStateType) => state.postDetailReducer;
export const getCommentListReducer = (state: AppStateType) => state.commentListReducer;
export const getCategoryListReducer = (state: AppStateType) => state.categoryListReducer;