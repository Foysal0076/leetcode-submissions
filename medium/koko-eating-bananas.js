/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */

var minEatingSpeed2 = function (piles, h) {
  let left = 1
  let right = Math.max.apply(Math, piles)

  while (left < right) {
    const mid = Math.floor(left + (right - left) / 2)
    let hoursTaken = 0
    for (let i = 0; i < piles.length; i++) {
      hoursTaken += Math.ceil(piles[i] / mid)
    }
    console.log({ left, right, mid, hoursTaken })
    if (hoursTaken <= h) {
      right = mid
    } else {
      left = mid + 1
    }
  }
  return left
}

const test1 = [3, 6, 7, 11]
const test2 = [30, 11, 23, 4, 20]
const test3 = [312884470]
const test4 = [1, 1, 1, 999999999] // 10hrs, expected 142857143 for [1,1,1,999999999]
console.log(minEatingSpeed2(test4, 10))
