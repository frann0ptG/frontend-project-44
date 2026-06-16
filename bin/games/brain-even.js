#!/usr/bin/env node
import readlineSync from 'readline-sync'
import { userName } from '../../cli.js'

const name = userName()
console.log('Welcome to the Brain Games!')
console.log(`Hello, ${name}!`)
console.log('Answer "yes" if the number is even, otherwise answer "no".')

let success = true

for (let i = 0; i < 3; i += 1) {
  const number = Math.floor(Math.random() * 100) + 1
  const isEven = num => num % 2 === 0
  const correctAnswer = isEven(number) ? 'yes' : 'no'

  const userAnswer = readlineSync.question(`Question: ${number}\nYour answer: `)

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

if (success) {
  console.log(`Congratulations, ${name}!`)
}
