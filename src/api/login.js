import $axios from './index'

export function login(data) {
  const url = '/adminlogin/login'
  return $axios.post(url, data)
}
export function getInfo() {
  const url = '/getInfo'
  return $axios.get(url)
}
export function getCode() {
  const url = '/adminlogin/getcode'
  return $axios.post(url,{uuid:"uuid"})
}
