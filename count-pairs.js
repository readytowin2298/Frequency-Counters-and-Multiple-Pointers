// add whatever parameters you deem necessary
function countPairs(nums, sum) {
    let seen = new Set();
    let pairs = 0;

    for(let num of nums){
        if(seen.has(num)){
            pairs++
        } else {
            seen.add(sum - num)
        }
    }

    return pairs;
}

module.exports = countPairs;
