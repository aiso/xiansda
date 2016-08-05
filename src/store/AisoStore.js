
const AisoStore = {
	setItem:function(k, v){
		return localStorage.setItem(k, JSON.stringify(v));
	},
	getItem:function(k){
		let v = localStorage.getItem(k);
		if(typeof(v) == 'string' && /^{.*}$/.test(v))
			return JSON.parse(v);
		else
			return null;
	},
	removeItem:function(k){
		return localStorage.removeItem(k);
	}

}

export default AisoStore
