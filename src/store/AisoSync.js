import axios from 'axios'

export default class AisoSync {
	constructor(options = {}) {
		var me = this;

		me.defaultExpires = options.defaultExpires !== undefined ? options.defaultExpires : 1000 * 3600 * 1;

		me.http = axios.create();
		me.http.interceptors.request.use(function (config) {
			// Do something before request is sent
			return config;
		}, function (error) {
			// Do something with request error
			return Promise.reject(error);
		});

	}
}

export default AisoSync