import axios from "../../http/request";

// 添加数据列表
export const insertComicList = (...rest: any[]) => {
  return axios({
    url: "/tuku",
    method: "post",
    ...rest
  });
};
