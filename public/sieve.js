function sumOfDivided(arr) {
  let biggest = arr[0]
  for (let i = 0; i < arr.length; i++) {
    if (Math.abs(arr[i]) > Math.abs(biggest)) {
      biggest = arr[i]
    }
  }
  const numbers = []
  for (let i = 2; i < Math.abs(biggest); i++) {
    numbers.push(i)
  }
  const primes = numbers.slice()
  for (let i = 0; i < numbers.length; i++) {
    let multiple = Math.floor(Math.abs(biggest) / numbers[i])
    while (multiple > 1) {
      let y = multiple * numbers[i]
      if (primes.indexOf(y) === -1) {
        multiple--
      } else {
        primes.splice(primes.indexOf(y), 1)
        multiple--
      }
    }
  }
  const pairs = []
  for (let i = 0; i < primes.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] % primes[i] === 0) {
        pairs.push([primes[i], arr[j]])
      }
    }
  }
  const answer = []
  answer.push(pairs[0])
  let x = 0
  for (let i = 1; i < pairs.length; i++) {
    if (pairs[i][0] === answer[x][0]) {
      answer[x][1] += pairs[i][1]
    }
    else {
      answer.push(pairs[i])
      x++
    }
  }
  return answer
}
