/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

const isAnagram = function (s, t) {
  let map = {}

  if (s.length !== t.length) return false
  let count = s.length
  for (const element of s) {
    let currCount = (map[element] || 0) + 1
    map[element] = currCount
  }

  for (const element of t) {
    if (!map[element] || map[element] === 0) return false
    map[element] -= 1
    count--
  }
  return count === 0
}

const s = 'acca'
const t = 'caaa'

console.log(isAnagram(s, t))
