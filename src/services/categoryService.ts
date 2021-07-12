import {
    CategoryType,
    FindAllType,
} from "../types/category";

import {ApiRoute} from "./index";

export async function findAll(credentials: FindAllType) {
    return new Promise(async (resolve, reject) => {
            const path = '/categories'
            try {
                const response: any = await new ApiRoute({
                    path: path,
                    params: credentials,
                    method: 'get'
                }).request()
                console.log(response)
                resolve(response)
            } catch (e) {
                reject(e)
            }
        }
    )
}

export async function findOne(id: number) {
    return new Promise(async (resolve, reject) => {
            const path = `/categories/${id}`
            try {
                const response: any = await new ApiRoute({
                    path: path,
                    method: 'get'
                }).request()
                resolve(response)
            } catch (e) {
                reject(e)
            }
        }
    )
}
