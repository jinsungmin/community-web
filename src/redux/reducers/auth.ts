import * as types from "../../constants";

export type UserType = {
  id?: number;
  createdAt?: string | undefined;
  name?: string | undefined;
  phone?: string | undefined;
  accountId?: string | undefined;
};

export type AuthType = {
  user: UserType | undefined;
};

const getUserInfo = (): UserType | undefined => {
  const userInfo = localStorage.getItem("user");
  if (userInfo) {
    return JSON.parse(userInfo);
  } else {
    return undefined;
  }
};

const initialState = {
  user: getUserInfo()
};

export default function reducer(
  state: AuthType = initialState,
  actions: UserType & { type: string }
): AuthType {
  switch (actions.type) {
    case types.AUTH_SIGN_IN_SUCCESS:
      return {
        ...state,
        user: {
          ...actions
        }
      };
    case types.AUTH_SIGN_UP_SUCCESS:
      return {
        ...state,
        user: {
          ...actions
        }
      };
    case types.AUTH_SIGN_OUT:
      return {
        ...state,
        user: undefined
      };

    default:
      return state;
  }
}