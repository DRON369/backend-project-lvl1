#!/usr/bin/env node
import greeting from './cli.js';
import brainEven from '../src/brain-even/brain-even.js';

const username = greeting();
brainEven(username);
