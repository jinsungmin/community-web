import { combineReducers } from "redux";

import authReducer from "./auth";
import userReducer from './user';

export const rootReducer = combineReducers({
    authReducer,
    userReducer,
});

type RootReducerType = typeof rootReducer;

type AppStateType = ReturnType<RootReducerType>;

export const getAuthReducer = (state: AppStateType) => state.authReducer;
export const getUserReducer = (state: AppStateType) => state.userReducer;