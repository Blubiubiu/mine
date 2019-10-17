import axios from "../../http/request";

// 获取上传七牛云所需token
export const qiniuToken = (...rest: any[]) => {
  return axios({
    url: "/uploadToken",
    method: "get",
    ...rest
  });
};
