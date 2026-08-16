let twoSum = function(nums, target) {

    let sum = 0
    let temp1 = 0
    let temp2 = 0

    for(let i = 0; i < nums.length; i++){
        temp1 = nums[i]
        
        for(let j = 1; j < nums.length; j++){
            if( i != j ){
                temp2 = nums[j]
                sum = temp1 + temp2

                if( sum != target ) {
                    summ = 0
                } else if( sum == target ) {
                    return [i, j]
                }
            }
        }
    }
};

console.log(" Index : ",twoSum([2,5,5,11], 10))