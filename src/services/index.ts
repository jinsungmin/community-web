import axios from 'axios'
import {instance} from '../lib/instance'

const successHandler = (res:any) => {
  try {
    return {status: res.status, data: res.data}
  } catch (e) {
    if (process.env.REACT_APP_DEV) console.error('ParseError: ', e)
  }
}

const errorHandler = (error:any) => {
  let ret
  try {
    ret = {status: error.response.status, errorMessage: error}
  } catch (parseError) {
    ret = {status: 400, errorMessage: error}
  }
  throw ret
}

export class ApiRoute {
  url: any
  path: any
  method: any
  params: any
  data: any
  model: any
  headers: any
  cancel: any

  constructor(state: any) {
    this.url = state.url || null
    this.path = state.path || ''
    this.method = state.method || 'get'
    this.params = state.params || {}
    this.data = state.data || {}
    this.model = state.model
    this.headers = state.headers || {}
  }

  asUrlRequest() {
    return new Promise((resolve, reject) => {
      const cancelToken = axios.CancelToken
      const options = {
        method: this.method,
        url: this.path,
        params: this.params,
        data: this.data,
        timeout: 20000,
        headers: this.headers,
        cancel: new cancelToken((c: any) => (this.cancel = c))
      }
      resolve(instance(options))
    })
  }
  async request() {
    try {
      const response = await this.asUrlRequest()
      return successHandler(response)
    } catch (e) {
      throw errorHandler(e)
    }
  }
}