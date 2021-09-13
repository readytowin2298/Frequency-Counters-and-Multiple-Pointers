// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {

    let arr1 = [...String(num1)].sort();
    let arr2 = [...String(num2)].sort();

    if(arr1.length != arr2.length) return false;

    for(let i=0; i<arr1.length; i++){
        if(arr1[i] !== arr2[i]){
            return false;
        }
    }
    return true;
    
}

module.exports = sameFrequency;
