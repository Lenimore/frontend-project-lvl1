#!/usr/bin/env node
import name from '../src/cli.js';
import isEven from './brain-even.js';

console.log('Welcome to the Brain Games!');
console.log(`Hello, ${name}!`);
isEven();
