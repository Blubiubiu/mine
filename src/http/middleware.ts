import HttpRequest from './axios'

let url = "/api"
if (process.env.NODE_ENV != 'development') {
  url = "https://api.11vx.cn"
} else {
  url = url
}

const http = new HttpRequest(url)
export default http
