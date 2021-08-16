import {ApiRoute} from "./index";

export async function findAll() {
    return new Promise(async (resolve, reject) => {
            const path = '/newsList'
            try {
                const response: any = await new ApiRoute({
                    path: path,
                    params: {},
                    method: 'get'
                }).request()
                resolve(response)
            } catch (e) {
                reject(e)
            }
        }
    )
}





