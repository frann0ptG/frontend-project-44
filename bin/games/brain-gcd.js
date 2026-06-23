#!/usr/bin/env node
import readlineSync from 'readline-sync'
import { userName } from '../../cli.js'

const findingGreatesDivisor = (num1, num2) => { // callback fnc
  if (num2 === 0) return num1
  let a = num1
  let b = num2
  while (b !== 0) {
    const temp = b
    b = a % b
    a = temp
  }
  return a
}

const name = userName()
console.log('Welcome to the Brain Games!')
console.log(`Hello, ${name}!`)
console.log('Find the greatest common divisor of given numbers.')

let success = true
for (let i = 0; i < 3; i += 1) {
  const num1 = Math.floor(Math.random() * 49) + 2
  const num2 = Math.floor(Math.random() * 49) + 2
  const correctAnswer = findingGreatesDivisor(num1, num2).toString()
  const userAnswer = readlineSync.question(`Question: ${num1} ${num2}\nYour answer: `)

  if (userAnswer === correctAnswer) console.log('Correct!')
  else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`)
    console.log(`Let's try again, ${name}!`)
    success = false
    break
  }
}
if (success) console.log(`Congratulations, ${name}!`)
