import axios from 'axios'

// const baseURL = process.env.REACT_APP_DEV ? '/api' : process.env.REACT_APP_URL
// const baseURL = '/api'
// const baseURL = process.env.REACT_APP_URL

export const instance = axios.create({
  baseURL: process.env.REACT_APP_URL,
  withCredentials: false,
  timeout: 20000
})

instance.interceptors.request.use(
  async config => {
    let accessToken:any = localStorage.getItem('accessToken');
    accessToken = JSON.parse(accessToken)

    if (accessToken) {
      config.headers = {
        'Authorization': `Bearer ${accessToken}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    } else {
      config.headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
    return config
  },
  error => {
    Promise.reject(error)
  }
)

instance.interceptors.response.use((response: any) => {
  return response
}, async function (error) {
  const originalRequest = error.config;
  if (error.response.status === 401 && !originalRequest._retry) {
    originalRequest._retry = true;

    let accessToken:any = localStorage.getItem('accessToken');
    let refreshToken:any = localStorage.getItem('refreshToken');

    accessToken = JSON.parse(accessToken)
    refreshToken = JSON.parse(refreshToken)

    const res:any = await axios.post(process.env.REACT_APP_URL + '/auth/refresh', {accessToken, refreshToken})

    await window.localStorage.setItem('accessToken', JSON.stringify(res.data.accessToken));

    originalRequest.headers = {
      'Authorization': `Bearer ${res.data.accessToken}`,
      'Accept': 'application/json',
    }

    return axios(originalRequest);
  }
  return Promise.reject(error);

});


// axios.defaults.withCredentials = true

// instance.interceptors.request.use((config) => {
//   if (cookie) config.headers = {...config.headers, cookie}
//   return config
//   // if (cookie) e.headers = {...e.headers, cookie}
// })
//
// instance.interceptors.response.use((res) => {
//   console.log(res)
//   if (res.headers['set-cookie']) cookie = res.headers['set-cookie']
//   return res
//   // if (e.headers['set-cookie']) cookie = e.headers['set-cookie']
// })

/*
instance.interceptors.request.use(
  (config) => {
    if (process.env.REACT_APP_ENV === 'dev') {
      console.log('-----------REQUEST-----------')
      console.log(config)
      console.log('-----------REQUEST-----------')
    }
    return config
  },
  (error) => {
    if (process.env.REACT_APP_ENV === 'dev') {
      console.log('-----------REQUEST ERROR-----------')
      console.log(error)
      console.log('-----------REQUEST ERROR-----------')
    }
    return Promise.reject(error.response)
  }
)

instance.interceptors.response.use(
  (response) => {
    if (process.env.REACT_APP_ENV === 'dev') {
      console.log('-----------RESPONSE-----------')
      console.log(response)
      console.log('-----------RESPONSE-----------')
    }
    // if (response.status === 401) {
    //   store.dispatch(signOut())
    // }
    return response
  },
  (error) => {
    if (process.env.REACT_APP_ENV === 'dev') {
      console.log('-----------RESPONSE ERROR-----------')
      console.log(error.response)
      console.log('-----------RESPONSE ERROR-----------')
    }
    // if (error.response.status === 401) {
    //   store.dispatch(signOut())
    // }
    return Promise.reject(error.response)
  }
)
 */