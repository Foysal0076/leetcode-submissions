//* For recursion find condition when return something
//Recursion
const nthFibonacci = (n) => {
  if (n <= 1) return n
  return nthFibonacci(n - 1) + nthFibonacci(n - 2)
}

const test1 = 40
console.time('recursion')
console.log(nthFibonacci(test1)) //1.385ms
console.timeEnd('recursion')

//Memoization technique solution
const nthFibonacciWithMemoization = (n) => {
  let lookupTable = []
  for (let i = 0; i <= n; i++) {
    lookupTable[i] = null
  }

  const fib = (n) => {
    if (lookupTable[n] === null) {
      if (n <= 1) {
        lookupTable[n] = n
      } else {
        lookupTable[n] = fib(n - 1) + fib(n - 2)
      }
    }
    return lookupTable[n]
  }
  return fib(n)
}

console.time('Memoization')
console.log(nthFibonacciWithMemoization(test1)) //.19ms
console.timeEnd('Memoization')

//Tabulation technique solution
const nthFibonacciWithTabulation = (n) => {
  //* Set base values for the series then return series[n]
  let series = [0, 1]
  for (let i = 2; i <= n; i++) {
    series[i] = series[i - 1] + series[i - 2]
  }
  return series[n]
}

console.time('Tabulation')
console.log(nthFibonacciWithTabulation(test1)) //.19ms
console.timeEnd('Tabulation')
