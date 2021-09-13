// add whatever parameters you deem necessary
function twoArrayObject(keys, vals) {
    let obj = {};

    for(let i=0; i<keys.length; i++){
        let key = keys[i];
        let val = vals.length>i ? vals[i] : null;
        obj[key] = val;
    }
    return obj;

}

module.exports = twoArrayObject;
