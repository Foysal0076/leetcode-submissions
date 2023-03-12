/**
 * @param {number[]} nums
 * @return {number}
 */

const findDuplicate = function (nums) {
  let slow = 0
  let fast = 0
  do {
    slow = nums[slow]
    fast = nums[nums[fast]]
    // console.log(slow, fast)
  } while (slow != fast)

  slow = 0
  // console.log('t')
  while (slow != fast) {
    // console.log(slow, fast)
    slow = nums[slow]
    fast = nums[fast]
  }

  return slow
}

const test1 = [3, 2, 4, 1, 2]
console.log(findDuplicate(test1))
