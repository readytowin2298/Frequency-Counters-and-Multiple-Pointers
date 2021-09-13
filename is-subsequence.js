// add whatever parameters you deem necessary
function isSubsequence(sub, str) {

    for(let i=0; i<sub.length; i++){
        let idx = str.indexOf(sub[i]);
        if(idx === -1) return false;
        str = str.slice(idx)
    }
    return true;
}

module.exports = isSubsequence;