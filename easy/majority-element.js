/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let element = nums[0]
  let count = 0

  for (let i = 0; i < nums.length; i++) {
    if (count === 0) element = nums[i]
    count += element === nums[i] ? 1 : -1
  }
  return element
}
