import * as types from "../../constants";

export type UserType = {
  id?: number;
  createdAt?: string | undefined;
  name?: string | undefined;
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
    case types.USER_DETAIL_SUCCESS:
      console.log('actions:', actions);
      return {
        ...state,
        user: {
          ...actions
        }
      };
    case types.USER_UPDATE_SUCCESS:
      console.log('actions:', actions);
      return {
        ...state,
        user: {
          ...actions
        }
      };
    case types.USER_DETAIL_FAILURE:
      return {
        ...state,
        user: undefined
      };
    case types.USER_UPDATE_FAILURE:
      return {
        ...state,
        user: undefined
      };
    default:
      return state;
  }
}