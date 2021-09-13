// add whatever parameters you deem necessary
function averagePair(ints, target) {

    const goal = new Set();
    for(let int of ints){
        if(goal.has(int)){
            return true
        }
        let test = (target * 2) - int;
        goal.add(test)
    }
    return false;
}

module.exports = averagePair