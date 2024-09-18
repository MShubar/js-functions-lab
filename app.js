///// Exercise 1
const maxOfTwoNumbers = (x, y) => {
  if (x >= y) {
    return x
  } else {
    return y
  }
}
console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9))

///// Exercise 2
const isAdult = (age) => {
  if (age >= 18) {
    return 'Adult'
  } else {
    return 'Minor'
  }
}
console.log('Exercise 2 Result:', isAdult(21))

///// Exercise 3
const isCharAVowel = (char) => {
  if (
    char === 'a' ||
    char === 'e' ||
    char === 'u' ||
    char === 'i' ||
    char === 'o'
  ) {
    return true
  } else {
    return false
  }
}
console.log('Exercise 3 Result:', isCharAVowel('p'))

///// Exercise 4
const generateEmail = (aName, domain) => {
  return aName + '@' + domain
}
console.log('Exercise 4 Result:', generateEmail('johnsmith', 'example.com'))

///// Exercise 5
const greetUser = (theName, time) => {
  return 'Good ' + time + ', ' + theName + '!'
}
console.log('Exercise 5 Result:', greetUser('sam', 'morning'))

///// Exercise 6
const maxOfThree = (num1, num2, num3) => {
  if (num1 > num2 && num1 > num3) {
    return num1
  } else if (num2 > num1 && num2 > num3) {
    return num2
  } else if (num3 > num1 && num3 > num2) {
    return num3
  }
}
console.log('Exercise 6 Result:', maxOfThree(5, 10, 8))

///// Exercise 7
const calculateTip = (bill, tip) => {
  return bill * (tip / 100)
}
console.log('Exercise 7 Result:', calculateTip(50, 20))

///// Exercise 8
const convertTemperature = (degrees, scale) => {
  if (scale === 'C') {
    return degrees * (9 / 5) + 32
  } else if (scale === 'F') {
    return (degrees - 32) * (5 / 9)
  }
}
console.log('Exercise 8 Result:', convertTemperature(32, 'C'))

///// Exercise 9
const basicCalculator = (numOne, numTwo, operator) => {
  if (operator === 'add') {
    return numOne + numTwo
  } else if (operator === 'subtract') {
    return numOne - numTwo
  } else if (operator === 'multiply') {
    return numOne * numTwo
  } else if (operator === 'divide') {
    return numOne / numTwo
  }
}
console.log('Exercise 9 Result:', basicCalculator(10, 5, 'subtract'))

///// Exercise 10
const calculateGrade = (score) => {
  if (score >= 90) {
    return 'A'
  } else if (score <= 89 && score >= 80) {
    return 'B'
  } else if (score <= 79 && score >= 70) {
    return 'C'
  } else if (score <= 69 && score >= 60) {
    return 'D'
  } else if (score < 60) {
    return 'f'
  }
}
console.log('Exercise 9 Result:', calculateGrade(10))
