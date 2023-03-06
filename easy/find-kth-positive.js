/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */

var findKthPositive = function (arr, k) {
  const missingLengthInTheArray = arr[arr.length - 1] - arr.length //6
  if (missingLengthInTheArray < k) return k + arr.length

  const missingArray = []

  let m = 1
  let n = 0

  while (m < arr[arr.length - 1]) {
    if (m !== arr[n]) {
      missingArray.push(m)
    } else {
      n++
    }
    m++
  }

  return missingArray[k - 1]
}

const test = [2, 3, 4, 7, 11]
const k = 5

console.log(findKthPositive(test, k))
