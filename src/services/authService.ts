import {
  ResetPasswordType,
  SignInType,
  SignUpType,
  SignUpVerifyConfirmType,
  VerifyEmailType,
  UpdatePasswordType
} from "../types/auth";

import {ApiRoute} from "./index";

export async function getAuth() {

  return new Promise(async (resolve, reject) => {
      const path = '/auth'

      try {
        const response: any = await new ApiRoute({
          path: path,
          method: 'get'
        }).request()

        const {type, ...user} = response.data.user

        localStorage.setItem(
          "user",
          JSON.stringify({
            role: type,
            ...user
            //name: response.data.user.name,
            //profileUrl: response.data.user.profileUrl,
          })
        );

        resolve(response)
      } catch (e) {
        reject(e)
      }
    }
  )
}

export async function putAuth(credentials: UpdatePasswordType) {

  return new Promise(async (resolve, reject) => {
      const path = '/auth'

      try {
        const response: any = await new ApiRoute({
          path: path,
          params: {...credentials},
          method: 'put'
        }).request()

        resolve(response)
      } catch (e) {
        reject(e)
      }
    }
  )
}

export function signIn(credentials: SignInType) {
  return new Promise(async (resolve, reject) => {
      const path = '/auth'

      try {
        const response: any = await new ApiRoute({
          path: path,
          params: {...credentials},
          method: 'post'
        }).request()

        const {type, ...user} = response.data.user

        localStorage.setItem(
          "user",
          JSON.stringify({
            role: type,
            ...user
            //name: response.data.user.name,
            //profileUrl: response.data.user.profileUrl,
          })
        );
        localStorage.setItem(
          "accessToken",
          JSON.stringify(response.data.accessToken)
        )
        localStorage.setItem(
          "refreshToken",
          JSON.stringify(response.data.refreshToken)
        )

        resolve(response.data)
      } catch (e) {
        reject(e)
      }
    }
  )
}

export function verifyEmail(credentials: VerifyEmailType) {
  return new Promise(async (resolve, reject) => {
      const path = '/verifications/email'
      try {
        const response: any = await new ApiRoute({
          path: path,
          params: {...credentials},
          method: 'post'
        }).request()

        resolve(response.data)
      } catch (e) {
        reject(e);
      }
    }
  )
}

export function verifyConfirm(credentials: SignUpVerifyConfirmType) {
  return new Promise(async (resolve, reject) => {
      const path = '/verifications/confirm'

      try {
        const response: any = await new ApiRoute({
          path: path,
          params: {...credentials},
          method: 'post'
        }).request()

        resolve(response.data)
      } catch (e) {
        reject(e);
      }
    }
  )
}

export function signUp(credentials: SignUpType) {
  return new Promise(async (resolve, reject) => {
      const path = '/auth/register'
      try {
        const response: any = await new ApiRoute({
          path: path,
          params: {...credentials},
          method: 'post'
        }).request()

        localStorage.setItem(
          "user",
          JSON.stringify({
            ...response.data.user
          })
        );
        localStorage.setItem(
          "accessToken",
          JSON.stringify(response.data.accessToken)
        )
        localStorage.setItem(
          "refreshToken",
          JSON.stringify(response.data.refreshToken)
        )

        resolve(response.data)
      } catch (e) {
        reject(e)
      }
    }
  )
}

export function resetPassword(credentials: ResetPasswordType) {
  return new Promise(async (resolve, reject) => {
      const path = `/auth/reset`

      try {
        const res: any = await new ApiRoute({
          path: path,
          data: {...credentials},
          method: 'put'
        }).request()
        resolve(res)
      } catch (e) {
        reject(e)
      }
    }
  )
}

export function emailVerify(email: string, codeToken: string) {
  return new Promise(async (resolve, reject) => {
      const path = `/auth/email`

      try {
        const res: any = await new ApiRoute({
          path: path,
          data: {email, codeToken},
          method: 'put'
        }).request()
        resolve(res)
      } catch (e) {
        reject(e)
      }
    }
  )
}