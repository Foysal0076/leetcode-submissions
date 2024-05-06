/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function (nums, val) {
  let ans = []
  for (let num of nums) {
    if (num !== val) {
      ans.push(num)
    }
  }
  return ans
}

const test1 = [0, 1, 1, 2, 3, 4, 5, 5, 5]
const value1 = 5

console.log(removeElement(test1, value1)) //[0,1,1,2,3,4]
