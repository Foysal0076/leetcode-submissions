/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let counts = {}

  for (let i = 0; i < nums.length; i++) {
    const currentCount = (counts[nums[i]] || 0) + 1
    if (currentCount > 1) return true
    counts[nums[i]] = currentCount
  }
  return false
}
