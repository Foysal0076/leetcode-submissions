const isValid = (sArray) => {
  const closingMap = {
    ')': '(',
    '}': '{',
    ']': '[',
  }

  const isOpening = (s) => {
    return s === '(' || s === '{' || s === '['
  }

  const stack = []

  for (let i = 0; i < sArray.length; i++) {
    if (isOpening(sArray[i])) {
      stack.push(sArray[i])
    } else {
      if (stack.length === 0) return false
      const lastChar = stack[stack.length - 1]
      if (lastChar === closingMap[sArray[i]]) {
        stack.pop()
      } else return false
    }
  }
  return stack.length === 0
}

console.log(isValid('()')) // true
console.log(isValid('()[]{}')) // true
console.log(isValid('(]')) // false
