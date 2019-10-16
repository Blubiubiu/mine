import axios from "axios";
axios.defaults.timeout = 30000;

class HttpRequest {
  private baseUrl: string;
  private queue: any;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
    this.queue = {};
  }

  private getInsideConfig() {
    const config = {
      baseURL: this.baseUrl,
      headers: {}
    };
    return config;
  }

  private distroy(url: string) {
    delete this.queue[url];
  }
  private interceptors(instance: any, url: string) {
    // 请求拦截
    instance.interceptors.request.use(
      (config: any) => {
        this.queue[url] = true;
        return config;
      },
      (error: any) => {
        return Promise.reject(error);
      }
    );
    // 响应拦截
    instance.interceptors.response.use(
      (res: any) => {
        this.distroy(url);
        const { data, status } = res;
        return {
          data,
          status
        };
      },
      (error: any) => {
        this.distroy(url);
        return Promise.reject(error);
      }
    );
  }
  public request(options: any) {
    if (options.url === "/tuku") {
        const newOptions = Object.assign({}, this.getInsideConfig(), {
            baseURL: 'tuku'
        });
        options = Object.assign(newOptions, options);
    } else {
        options = Object.assign(this.getInsideConfig(), options);
    }
    const instance = axios.create();
    this.interceptors(instance, options.url);
    return instance(options);
  }
}
export default HttpRequest;
