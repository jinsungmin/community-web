import * as types from "../../constants";
import {AppDispatchType} from "../store";
import {
  SignInType,
  SignInSocialType,
  SignUpType,
  ResetPasswordType
} from "../../types/auth";
import {
  signIn as authSignIn,
  signUp as authSignUp,
  resetPassword as authResetPassword,
  getAuth as authGetAuth,
  signInSocial as authSignInSocial
} from "../../services/authService";

export function getAuth() {
  return async (dispatch: AppDispatchType) => {
    dispatch({type: types.AUTH_SIGN_IN_REQUEST});

    return authGetAuth()
      .then((res: any) => {
        const {type, ...user} = res.data.user

        dispatch({
          type: types.AUTH_SIGN_IN_SUCCESS,
          role: type,
          ...user
        });
      })
      .catch(async (error) => {
        dispatch({type: types.AUTH_SIGN_IN_FAILURE});
        localStorage.removeItem("user");
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");

        window.location.href = '/auth/sign-in'
        throw error;
      });
  }
}

export function signIn(credentials: SignInType) {
  return async (dispatch: AppDispatchType) => {
    dispatch({type: types.AUTH_SIGN_IN_REQUEST});

    return authSignIn(credentials)
      .then((response: any) => {
        const {type, ...user} = response.user
        dispatch({
          type: types.AUTH_SIGN_IN_SUCCESS,
          role: type,
          ...user
        });
      })
      .catch((error) => {
        dispatch({type: types.AUTH_SIGN_IN_FAILURE});
        throw error;
      });
  };
}

export function signInSocial(credentials: SignInSocialType) {
  return async (dispatch: AppDispatchType) => {
    dispatch({type: types.AUTH_SIGN_IN_REQUEST});

    return authSignInSocial(credentials)
        .then((response: any) => {
          const {type, ...user} = response.user
          dispatch({
            type: types.AUTH_SIGN_IN_SUCCESS,
            role: type,
            ...user
          });
        })
        .catch((error) => {
          dispatch({type: types.AUTH_SIGN_IN_FAILURE});
          throw error;
        });
  };
}

export function signUp(credentials: SignUpType) {
  return async (dispatch: AppDispatchType) => {
    dispatch({type: types.AUTH_SIGN_UP_REQUEST});

    return authSignUp(credentials)
      .then((response: any) => {
        const {type, ...user} = response.user
        dispatch({
          type: types.AUTH_SIGN_UP_SUCCESS,
          role: type,
          ...user
        });
      })
      .catch((error) => {
        dispatch({type: types.AUTH_SIGN_UP_FAILURE});
        throw error;
      });
  };
}

export function signOut() {
  return async (dispatch: AppDispatchType) => {
    var date = new Date()
    date.setDate(date.getDate() - 1);

    localStorage.clear()
    document.cookie = `Expires=${date.toUTCString()}`
    dispatch({
      type: types.AUTH_SIGN_OUT
    });
  };
}

export function resetPassword(credentials: ResetPasswordType) {
  return async (dispatch: AppDispatchType) => {
    dispatch({type: types.AUTH_RESET_PASSWORD_REQUEST});

    return authResetPassword(credentials)
      .then((response: any) => {
        dispatch({
          type: types.AUTH_RESET_PASSWORD_SUCCESS,
          email: response.email
        });
      })
      .catch((error) => {
        dispatch({type: types.AUTH_RESET_PASSWORD_FAILURE});
        throw error;
      });
  };
}