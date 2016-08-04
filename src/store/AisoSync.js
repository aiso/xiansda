import axios from 'axios'


export default class AisoSync {
	constructor(options = {}) {
		var me = this;

		me.defaultExpires = options.defaultExpires !== undefined ? options.defaultExpires : 1000 * 3600 * 1;

		me.http = axios.create();

		if(typeof options.interceptorRequest === 'function'){
			me.http.interceptors.request.use(options.interceptorRequest, function (error) {
				// Do something with request error
				return Promise.reject(error);
			});
		}

		if(typeof options.interceptorResponse === 'function'){
			me.http.interceptors.response.use(options.interceptorResponse, function (error) {
				// Do something with request error
				return Promise.reject(error);
			});
		}
	}
}

export default AisoSync