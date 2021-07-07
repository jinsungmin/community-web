import {
  UpdateType
} from "../types/user";

import {ApiRoute} from "./index";

export function update(id: number, params: UpdateType) {

  return new Promise(async (resolve, reject) => {
      const path = `/users/${id}`

      try {
        const response: any = await new ApiRoute({
          path: path,
          params,
          method: 'put'
        }).request()

        resolve(response.data)
      } catch (e) {
        reject(e);
      }
    }
  )
}

export function deleteUser() {
  return new Promise(async (resolve, reject) => {
      const path = `/users`

      try {
        const res: any = await new ApiRoute({
          path: path,
          method: 'delete'
        }).request()
        resolve(res)
      } catch (e) {
        reject(e)
      }
    }
  )
}