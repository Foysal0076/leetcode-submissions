/**
 * @param {number[]} time
 * @param {number} totalTrips
 * @return {number}
 */

var minimumTime = function (time, totalTrips) {
  const possibleInGivenTime = (times, givenTime) => {
    let sum = 0
    for (let i = 0; i < times.length; i++) {
      sum += Math.floor(givenTime / times[i])
    }
    return sum >= totalTrips
  }

  let left = 1
  let right = time[0] * totalTrips

  while (left < right) {
    let midTime = Math.floor(left + (right - left) / 2)
    if (possibleInGivenTime(time, midTime)) {
      right = midTime
    } else {
      left = midTime + 1
    }
  }
  return left
}

const test1 = [1, 2, 3]
const test2 = [5, 10, 10]
const test3 = [2]

console.log(minimumTime(test1, 5))
console.log(minimumTime(test2, 9))
console.log(minimumTime(test3, 50))
