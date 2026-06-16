#!/usr/bin/env node
import readlineSync from 'readline-sync'
import { userName } from '../cli.js'

const name = userName()
console.log('Welcome to the Brain Games!')
console.log(`Hello, ${name}!`)
console.log('What is the result of the expression?')

let success = true
const operators = ['+', '-', '*']

for (let i = 0; i < 3; i += 1) {
  const num1 = Math.floor(Math.random() * 10) + 1
  const num2 = Math.floor(Math.random() * 10) + 1
  const correctOperator = operators[Math.floor(Math.random() * operators.length)]

  let correctAnswer
  const question = `Question: ${num1} ${correctOperator} ${num2}\nYour answer: `

  switch (correctOperator) {
    case '+':
      correctAnswer = num1 + num2
      break
    case '-':
      correctAnswer = num1 - num2
      break
    default:
      correctAnswer = num1 * num2
  }
  const userAnswer = readlineSync.question(question)
  if (Number(userAnswer) === correctAnswer) {
    console.log('Correct!')
  }
  else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`)
    console.log(`Let's try again, ${name}!`)
    success = false
    break
  }
}
if (success) {
  console.log(`Congratulations, ${name}!`)
}
