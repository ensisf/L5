import axios from 'axios'
import NProgress from 'nprogress'
import { getToken } from '@/auth.js'
import 'nprogress/nprogress.css'

const inst = axios.create({
  baseURL: 'http://localhost:3004',
  headers: {
    Authorization: `Bearer ${getToken()}`
  }
})

const errorHandler = error => {
  NProgress.done()
  return Promise.reject(error)
}

const requestHandler = config => {
  NProgress.start()
  return config
}

const responseHandler = response => {
  NProgress.done()
  return response
}

inst.interceptors.request.use(requestHandler, errorHandler)

inst.interceptors.response.use(responseHandler, errorHandler)

export default inst
