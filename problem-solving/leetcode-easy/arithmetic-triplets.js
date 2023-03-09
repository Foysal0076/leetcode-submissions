/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function (nums, diff) {
  var count = 0
  var map = {}
  for (var i = 0; i < nums.length; i++) {
    var num = nums[i]
    var num2 = num - diff
    var num3 = num2 - diff
    if (map[num2] && map[num3]) {
      console.log('true', num2, num3, map[num2], map[num3])
      count += map[num2] * map[num3]
    }
    console.log(count, map)
    map[num] = (map[num] || 0) + 1
  }
  return count
}

const test1 = [0, 1, 4, 6, 7, 10]
console.log(arithmeticTriplets(test1, 3))
