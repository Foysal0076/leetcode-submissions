const squareAnArray = (arr) => {
  let left = 0
  let right = arr.length - 1

  let squares = []

  while (left <= right) {
    const leftValue = Math.abs(arr[left])
    const rightValue = Math.abs(arr[right])
    if (leftValue > rightValue) {
      squares.push(leftValue * leftValue)
      left++
    } else {
      squares.push(rightValue * rightValue)
      right--
    }
  }
  return squares.reverse()
}

const test = [-3, -2, 1]
console.log(squareAnArray(test))
