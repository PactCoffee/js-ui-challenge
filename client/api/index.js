import Barn from 'barn';

class Api {
    constructor() {
        this.barn = new Barn(window.localStorage);
    }
    checkUserData(cb) {
    	window.setTimeout(() => {
            const user = this.barn.get('user');
            if(user) {
            	cb(user);
            } else {
            	this.barn.set('user', {});
            	cb(false);
            }
    	}, 100);
    }
    setUserData(data, cb) {
        window.setTimeout(() => {
            const user = this.barn.get('user');
            const userData = Object.assign(user, data);
            this.barn.set('user', userData);
            cb(this.barn.get('user'));
        }, 100);
    }
    deleteUserData(cb) {
        window.setTimeout(() => {
            this.barn.del('user');
            cb(true);
        }, 100);
    }
}

export default Api;