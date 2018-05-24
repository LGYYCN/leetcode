/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let l =nums.length
  for (let i = 0; i < l; i++) {
    if (nums[i]===0) {
      for (let j = i; j < l-1; j++) {
        nums[j]=nums[j+1]
      }
      nums[l-1]=0
      l--
      i--
    }
  }
  console.log(nums)
};

moveZeroes([0,1,0,3,12])

var moveZeroes2 = function(nums) {
  let l =nums.length
  for (let i = 0; i < l; i++) {
    if (nums[i]===0) {
      nums.splice(i,1)
      nums.push(0)
      i--
      l--
    }
  }
  console.log(nums)
};

moveZeroes2([0,1,0,3,12])