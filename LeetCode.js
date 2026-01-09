
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * @date 09/01/2026
 */
var twoSum = function (nums, target) {
    let temp = nums[0]
    for (i = 0; i <= nums.length; i++) {
        for (j = i+1; j <= nums.length; j++)
            if (nums[i] + nums[j] == target) return [i, j]
    }
};

console.log(twoSum([3,2,4], 6));
