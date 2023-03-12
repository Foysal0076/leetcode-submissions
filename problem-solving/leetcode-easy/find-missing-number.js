/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = function (nums) {
  let sum = 0
  let highestNumber = nums[0]
  nums.forEach((num, index) => {
    sum += num
    if (num > highestNumber) highestNumber = num
  })

  const sumWithMissingNumber = highestNumber * ((highestNumber + 1) / 2)
  return sumWithMissingNumber - sum
}

const test1 = [9, 6, 4, 2, 3, 5, 7, 0, 1]
console.log(missingNumber(test1))
