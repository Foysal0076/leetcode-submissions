/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

const intersection = function (nums1, nums2) {
  const set1 = new Set(nums1)
  const set2 = new Set(nums2)

  const intersection = new Set([...set1].filter((x) => set2.has(x)))
  return [...intersection]
}

const arr1 = [4, 9, 5]
const arr2 = [9, 4, 9, 8, 4, 13, 14]

console.log(intersection(arr1, arr2))
