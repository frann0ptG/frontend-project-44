#!/usr/bin/env node
import { userName } from '../cli.js'

console.log('Welcome to the Brain Games!')
const name = userName()
console.log(`Hello, ${name}!`)
