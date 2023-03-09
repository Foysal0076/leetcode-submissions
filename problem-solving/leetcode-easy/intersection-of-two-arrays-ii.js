/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

const makeArrayUnique = (arr) => {
  let unique = []
  arr.forEach((element) => {
    if (unique.indexOf(element) === -1) {
      unique.push(element)
    }
  })
  return unique
}

const sort = (arr) => {
  return arr.sort((a, b) => a - b)
}

const intersect = function (nums1, nums2) {
  nums1 = sort(nums1)
  nums2 = sort(nums2)

  let common = []
  let i = 0,
    j = 0

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] > nums2[j]) {
      j++
    } else if (nums1[i] < nums2[j]) {
      i++
    } else {
      common.push(nums1[i])
      j++
      i++
    }
  }

  return common
}

const arr1 = [4, 9, 5]
const arr2 = [9, 4, 9, 8, 4, 13, 14]

console.log(intersect(arr2, arr1))
