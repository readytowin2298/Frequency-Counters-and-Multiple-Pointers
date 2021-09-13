// add whatever parameters you deem necessary
function constructNote(msg, letters) {
    let message = {};
    let letObj = {};


    for(let l of letters){
        if(!letObj[l]){
            letObj[l] = 1;
        } else {
            letObj[l] += 1;
        };
    };

    for(let m of msg){
        if(!message[m]){
            message[m] = 1;
        } else {
            message[m] += 1;
        };
        if( !letObj[m] || message[m] > letObj[m]){
            return false;
        }
    };
    return true;
}

module.exports = constructNote;