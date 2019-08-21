import axios from 'axios';

axios.defaults.timeout = 30000;

class HttpRequest {
	baseUrl: String;
	queue: Object;
	constructor(baseUrl: String) {
		this.baseUrl = baseUrl;
		this.queue = {};
	}
	getInsideConfig() {
		const config = {
			baseURL: this.baseUrl,
			headers: {
				// contentType: "application/json; charset=utf-8"
			}
		};
		return config;
	}

	distroy(url) {
		delete this.queue[url];
	}
	interceptors(instance, url) {
		// 请求拦截
		instance.interceptors.request.use(
			(config) => {
				this.queue[url] = true;
				return config;
			},
			(error) => {
				return Promise.reject(error);
			}
		);
		// 响应拦截
		instance.interceptors.response.use(
			(res) => {
				this.distroy(url);
				const { data, status } = res;
				return {
					data,
					status
				};
			},
			(error) => {
				this.distroy(url);
				if (error.response.status === 401) {
				} else {
				}
				return Promise.reject(error);
			}
		);
	}
	request(options) {
		const instance = axios.create();
		options = Object.assign(this.getInsideConfig(), options);
		this.interceptors(instance, options.url);
		return instance(options);
	}
}
export default HttpRequest;
