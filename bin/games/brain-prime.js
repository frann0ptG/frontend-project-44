#!/usr/bin/env node
import readlineSync from 'readline-sync'
import { userName } from '../../cli.js'

const isPrime = (num) => {
  const limit = Math.sqrt(num)
  const arr = Array.from({ length: Math.floor(limit) - 1 }, (_, i) => i + 2)
  if (num < 2) return false
  else if (arr.some(element => num % element === 0)) return false
  return true
}

const name = userName()
console.log('Welcome to the Brain Games!')
console.log(`Hello, ${name}!`)
console.log('Answer "yes" if given number is prime. Otherwise answer "no".')

let success = true
for (let i = 0; i < 3; i += 1) {
  const num = Math.floor(Math.random() * 30) + 1
  const correctAnswer = isPrime(num) ? 'yes' : 'no'
  const userAnswer = readlineSync.question(`Question: ${num}\nYour answer: `)

  if (userAnswer === correctAnswer) {
    console.log('Correct!')
  }
  else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
    console.log(`Let's try again, ${name}!`)
    success = false
    break
  }
}
if (success) console.log(`Congratulations, ${name}!`)
