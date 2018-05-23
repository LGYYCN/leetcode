/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] ===val) {
      for (let j = i; j < nums.length-1; j++) {
        nums[j]=nums[j+1]
      }
      i--
      nums.pop()
    }
  }
  console.log(nums)
};

removeElement([0,1,2,2,3,0,4,2],2)
