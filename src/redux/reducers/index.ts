import { combineReducers } from "redux";

import authReducer from "./auth";
import userReducer from './user';
import postListReducer from './postList';

export const rootReducer = combineReducers({
    authReducer,
    userReducer,
    postListReducer,
});

type RootReducerType = typeof rootReducer;

type AppStateType = ReturnType<RootReducerType>;

export const getAuthReducer = (state: AppStateType) => state.authReducer;
export const getUserReducer = (state: AppStateType) => state.userReducer;
export const getPostListReducer = (state: AppStateType) => state.postListReducer;