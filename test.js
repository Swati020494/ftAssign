import {setter,getter,isSameOrPartOfKey} from './utils';
let create = (data) => {
   let old = data, inter =data, latest = data;
	return {
	    observers : [],
	    base:JSON.parse(JSON.stringify(old)),
	    intermediate:JSON.parse(JSON.stringify(old)),
	    latest:JSON.parse(JSON.stringify(old)),
	    onData:{value:null,func:null},
	    onNext:{val:null,count:0,func:null},
	    isLock:false,
	    /**
		 * getState() returns a original data
		 */
		getState : () => {
			return old;
		},
		/**
		 * create() returns a original data
		 * based on the passed-in param1 and param 2
		 */
		create : function(param1,param2){
		  if(param2) return setter(this.latest,param1,param2);
		  Object.assign(this.latest,param1);
		  return;
		},
		on: function(param1, param2){
		  this.onData.value = param1;
		  this.onData.func = param2;
		  this.onNext.value = null;
		  this.onNext.func = null;
		  this.onNext.count = 0;
		},
		next: function(param1, param2){
			this.onData.value = null;
		  this.onData.func = null;
		  this.onNext.value = param1;
		  this.onNext.func = param2;
		},
		lock: function(){
			lock = true;
		},
		unlock: function(){
			lock = false;
		},
		prop : function(param1,param2){
		  if(!param2) {
		   return getter(this.latest,param1);
		  }
		 let myval = setter(this.latest,param1,param2);
		 console.log(isSameOrPartOfKey(param1,this.onData.value,this.latest))
		 if(this.onData.value && isSameOrPartOfKey(param1,this.onData.value,this.latest) && !this.isLock) this.onData.func(this.intermediate,myval);
		 else if(this.onNext.value && isSameOrPartOfKey(param1,this.onNext.value,this.latest) &&  !this.isLock && this.onNext.count === 1 ) this.onData.func(this.intermediate,myval);
		 else if(this.onNext.value && isSameOrPartOfKey(param1,this.onNext.value,this.latest) && !this.isLock && this.onNext.count === 0 ) this.onData.count = 1;
			  this.intermediate = !this.isLock ? JSON.parse(JSON.stringify(this.latest)):this.intermediate;
			  return;
			}
	};
};
export {create:create} ;