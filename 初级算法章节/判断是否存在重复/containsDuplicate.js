/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  nums.sort()
  for (let i = 0; i < nums.length-1; i++) {
    if (nums[i]===nums[i+1]) {
      return true
    }
  }
  return false
};

containsDuplicate([1,1,1,3,3,4,3,2,4,2])

var containsDuplicate2 = function(nums) {
  let l = new Set(nums)
  console.log(l.size!== nums.length);
};

containsDuplicate2([134,41,11,11])