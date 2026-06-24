#!/usr/bin/env node
import readlineSync from 'readline-sync'
import { userName } from '../../cli.js'

const createProgression = (progressionLength, start, step) => {
  const result = []
  for (let i = 0; i < progressionLength; i += 1) {
    const currentElement = start + i * step
    result.push(currentElement)
  }
  return result
}

const name = userName()
console.log('Welcome to the Brain Games!')
console.log(`Hello, ${name}!`)
console.log('What number is missing in the progression?')

let success = true
for (let i = 0; i < 3; i += 1) {
  const progressionLength = Math.floor(Math.random() * 6) + 5
  const start = Math.floor(Math.random() * 30) + 1
  const step = Math.floor(Math.random() * 10) + 1
  const elementToChange = Math.floor(Math.random() * progressionLength)
  const progression = createProgression(progressionLength, start, step)
  const changedProgression = progression
    .map((current, i) => i === elementToChange ? '..' : current)
  const correctAnswer = progression[elementToChange].toString()
  const userAnswer = readlineSync.question(`Question: ${changedProgression.join(' ')}\nYour answer: `)
  if (correctAnswer === userAnswer) console.log('Correct!')
  else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`)
    console.log(`Let's try again, ${name}!`)
    success = false
    break
  }
}
if (success) console.log(`Congratulations, ${name}!`)
