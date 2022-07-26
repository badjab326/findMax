function findMax(nums){
    let nl = nums.length;
    maximum = nums[nl-1];
    while (nl--){
        if(nums[nl] > maximum){
            maximum = nums[nl]
        }
    }
            return maximum;
};
module.exports = findMax;