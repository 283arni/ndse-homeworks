#!/usr/bin/env node

const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

const startNum = 0;
const endNum = 100;
const num = Math.floor(Math.random() * endNum);



console.log(`Загадано число в диапазоне от ${startNum} до ${endNum}`)

rl.on('line', (input) => {

    if(endNum < input || startNum > input) {
        console.log(`Вы вводите не верные числа`);

        return;
    }

    if(num > input) {
        console.log(`Больше`);
    }

    if(num < input) {
        console.log(`Меньше`);
    }

    if(num == input) {
        console.log(`Отгадано число ${input}`);
        rl.close();
    }
}); 
