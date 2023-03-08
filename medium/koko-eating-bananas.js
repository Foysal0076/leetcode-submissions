/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */

var minEatingSpeed = function (piles, h) {
  let left = 1
  let right = Math.max.apply(Math, piles)

  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2)
    let hoursTaken = 0
    for (let i = 0; i < piles.length; i++) {
      hoursTaken += Math.ceil(piles[i] / mid)
    }

    if (hoursTaken === h) return mid
    if (hoursTaken < h) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return left
}

const test1 = [3, 6, 7, 11] // 8 hrs
const test2 = [30, 11, 23, 4, 20] // 6hrs
const test3 = [312884470] // 6hrs
const test4 = [1,1,1,999999999] // 6hrs
console.log(minEatingSpeed(test4, 10))
