import {
    CommentType,
    CreateType,
    UpdateType,
    FindAllType,
} from "../types/comment";

import {ApiRoute} from "./index";

export async function findAll(credentials: FindAllType) {
    return new Promise(async (resolve, reject) => {
            const path = '/comments'
            try {
                const response: any = await new ApiRoute({
                    path: path,
                    params: credentials,
                    method: 'get'
                }).request()
                resolve(response)
            } catch (e) {
                reject(e)
            }
        }
    )
}

export async function findOne(id: number) {
    return new Promise(async (resolve, reject) => {
            const path = `/comments/${id}`
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

export async function create(credentials: CreateType) {
    return new Promise(async (resolve, reject) => {
            const path = '/comments'
            try {
                const response: any = await new ApiRoute({
                    path: path,
                    params: credentials,
                    method: 'post'
                }).request()
                resolve(response)
            } catch (e) {
                reject(e)
            }
        }
    )
}

export async function updateOne(credentials: UpdateType) {
    return new Promise(async (resolve, reject) => {
            const path = '/comments'
            try {
                const response: any = await new ApiRoute({
                    path: path,
                    params: credentials,
                    method: 'put'
                }).request()
                resolve(response)
            } catch (e) {
                reject(e)
            }
        }
    )
}

export async function deleteOne(id: number) {
    return new Promise(async (resolve, reject) => {
            const path = `/comments/${id}`
            try {
                const response: any = await new ApiRoute({
                    path: path,
                    method: 'delete'
                }).request()
                resolve(response)
            } catch (e) {
                reject(e)
            }
        }
    )
}


