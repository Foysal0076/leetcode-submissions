/**
 * @param {number[]} arr
 * @return {boolean}
 */

var uniqueOccurrences = function (arr) {
  const counts = new Map()
  for (let i = 0; i < arr.length; i++) {
    counts.set(arr[i], (counts.get(arr[i]) || 0) + 1)
  }

  let values = []

  for (let value of counts.values()) {
    values.push(value)
  }

  return values.length === new Set(values).size
}
