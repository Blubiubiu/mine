import HttpRequest from "./axios";

let url;
if (process.env.NODE_ENV !== "development") {
  url = "https://api.11vx.cn";
} else {
  url = "/api";
}

const http = new HttpRequest(url);
export default http;
