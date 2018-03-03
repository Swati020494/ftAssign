export let setter = (data, key, val) => {
  let keys = key.split('.');
  let objThres =[];
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

export let isSameOrPartOfKey = (changedPropParam, displayParam, newdata) => {
  if (changedPropParam === displayParam) return true;
  let keyParam1, keyParam2, lengthkKeyParam1, lengthkKeyParam2, length, error = false;
  keyParam1 = changedPropParam.split('.');
  keyParam2 = displayParam.split('.');
  lengthkKeyParam1 = keyParam1.length;
  lengthkKeyParam2 = keyParam2.length;
  if (lengthkKeyParam1 === lengthkKeyParam2) return false;
  if (lengthkKeyParam1 > lengthkKeyParam2){
    console.log("hee", changedPropParam, displayParam, keyParam1,keyParam2)
    for (let i = 0; i < lengthkKeyParam2; i++) {
      if (keyParam1 [i]!== keyParam2[i]) {
        error = true;
        break;
      }
    }
    if (error) return false;
    return true;
  }
  for (let i = 0; i < lengthkKeyParam1; i++) {
      if (keyParam1[i]!== keyParam2[i]) {
        error = true;
        break;
      }
  }
  if (error ) return false; 
  if(getter(newdata,displayParam)==='error') return false;
  return true;
};