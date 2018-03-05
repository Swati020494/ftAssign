/**
 * setter() 
 * sets the values
 * Take three arguments, 'data' being the state of data at the time,
 * 'key' being the key to be set 
 * 'val' ids the value to be assigned to hey
 */
export let setter = (data, key, val) => {
  let keys = key.split('.');
  let objThres = [];
  for (let i = 0; i < keys.length; i++) {
    if (i === keys.length - 1) {
      objThres[keys[i]] = val;
    } else if (i === 0) {
      objThres = data[keys[0]];
    } else {
      objThres[keys[i]] = {};
      objThres = objThres[keys[i]];
    }
  }
  return data;
};
/**
 * getter() 
 * get the value of the  
 * Take two argument, 'data' being the state of data at the time,
 * 'key' being the key whose value has to be retrieved
 */
export let getter = (data, key) => {
  let keys = key.split('.'), error = false, val, objThres;
  for (let i = 0; i < keys.length; i++) {
    if (i === keys.length - 1) {
      val = objThres[keys[i]] ? objThres[keys[i]] : 'error';
    } else if (i === 0) {
      objThres = data[keys[0]];
    } else if (objThres[keys[i]]) {
      objThres = objThres[keys[i]];
    } else {
      error = true;
      break;
    }
  }
  return error ? 'key not found' : val;
};
/**
 * isSameOrPartOfKey() 
 * Take three arguments, 'displayParam', 'changedPropParam', 'newdata'
 * it matches both the params and sees if its good on and prop affect the same param
 */
export let isSameOrPartOfKey = (changedPropParam, displayParam, newdata) => {
  if (changedPropParam === displayParam) return true;
  let keyParam1, keyParam2, lengthkKeyParam1, lengthkKeyParam2, length, error = false;
  keyParam1 = changedPropParam.split('.');
  keyParam2 = displayParam.split('.');
  lengthkKeyParam1 = keyParam1.length;
  lengthkKeyParam2 = keyParam2.length;
  if (lengthkKeyParam1 === lengthkKeyParam2) return false;
  if (lengthkKeyParam1 > lengthkKeyParam2) {
    for (let i = 0; i < lengthkKeyParam2; i++) {
      if (keyParam1[i] !== keyParam2[i]) {
        error = true;
        break;
      }
    }
    if (error) return false;
    return true;
  }
  for (let i = 0; i < lengthkKeyParam1; i++) {
    if (keyParam1[i] !== keyParam2[i]) {
      error = true;
      break;
    }
  }
  if (error) return false;
  if (getter(newdata, displayParam) === 'error') return false;
  return true;
};
/**
 * deepCopyObject() 
 * Take one argument, 'param' and returns a new copy of the object
 * it follows a recursive approach to copy the  function
 */
export const deepCopyObject = (param)=>{
    let copiedObj,i;
    if (typeof param !== 'object') {
      return param;
    }
    if (!param) {
      return param;
    }
    //copying the array inside an object
    if ('[object Array]' === Object.prototype.toString.apply(param)) {
      copiedObj = [];
      for (i = 0; i < param.length; i += 1) {
        copiedObj[i] = deepCopyObject(param[i]);
      }
      return copiedObj;
    }
    copiedObj = {};
    //rest all kind of keys
    for (i in param) {
      if (param.hasOwnProperty(i)) {
          copiedObj[i] = deepCopyObject(param[i]);
      }
    }
    return copiedObj;
  }