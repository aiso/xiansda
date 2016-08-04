
export default class AisoAuth {

	constructor(options = {}) {
		var me = this;

		me.keyPref = options.keyPref || 'AISO_';
		me.keyUser = options.keyUser || 'user';
		me.keyLastLogin = options.keyLastLogin || 'last-login';
		me.keyReturnUrl = options.keyReturnUrl || 'return-url';
		me.keyCurrentUrl = options.keyCurrentUrl || 'current-url';
		me.defaultExpires = options.defaultExpires !== undefined ?
		  options.defaultExpires : 1000 * 3600 * 1;
	}

    getUser(){
        var user = localStorage.getItem(this.keyPref + this.keyUser);

        if(!!user && !!user.last_access && user.expire){
            var timeStr = user.last_access.split(/[\s:-]/),
                loginTime = new Date(timeStr[0], timeStr[1]-1, timeStr[2], timeStr[3], timeStr[4], timeStr[5]),
                currTime = new Date();
            if(currTime.getTime() - loginTime.getTime() > user.expire*1000){
                localStorage.removeItem(this.keyPref + this.keyUser);
                return null;
            }
        }
        return user;
    }

    lastUser(){
        return localStorage.getItem(this.keyPref + this.keyLastLogin);
    }

    loginUser(user){
        localStorage.setItem(this.keyPref + this.keyUser, user);
        localStorage.setItem(this.keyPref + this.keyLastLogin, {id:user.id,uid:user.uid,role:user.role,last_login:user.last_login});
    }

    logout(data){
        localStorage.removeItem(this.keyPref + this.keyUser);
    }

    updateUser(user){
        var curr = this.getUser();
        if(!!curr && user.id == curr.id){
            localStorage.setItem(this.keyPref + this.keyUser, user);
        }
    }
}
