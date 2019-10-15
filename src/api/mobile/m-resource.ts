import axios from "../../http/request";

// 学员列表
export const list = (...rest: any[]) => {
  return axios({
    url: "user",
    method: "post",
    ...rest
  });
};
