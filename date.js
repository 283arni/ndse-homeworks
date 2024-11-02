#!/usr/bin/env node

const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

const argv = yargs(hideBin(process.argv))
    .command('current', 'show date now',() => {}, (argv) => {
        const date = new Date();

        if(argv.y) {
            console.log(date.getFullYear())
            return;
        }

        if(argv.m) {
            console.log(date.getMonth())
            return;
        }

        if(argv.d) {
            console.log(date.getDate())
            return;
        }

        console.log(date.toLocaleString())
    })
    .command('add [count]', 'add count',() => {}, (argv) => {
        const date = new Date();

        if(argv.y) {
            date.setFullYear(date.getFullYear() + argv.count);
            console.log(date.toLocaleString());
        }

        if(argv.m) {
            date.setMonth(date.getMonth() + argv.count);
            console.log(date.toLocaleString());
        }

        if(argv.d) {
            date.setDate(date.getDate() + argv.count);
            console.log(date.toLocaleString());
        }
    })
    .command('sub [count]', 'sub count',() => {}, (argv) => {
        const date = new Date();

        if(argv.y) {
            date.setFullYear(date.getFullYear() - argv.count);
            console.log(date.toLocaleString());
        }

        if(argv.m) {
            date.setMonth(date.getMonth() - argv.count);
            console.log(date.toLocaleString());
        }

        if(argv.d) {
            date.setDate(date.getDate() - argv.count);
            console.log(date.toLocaleString());
        }
    })
    .options({
        'params': {
            alias: ['y', 'year'],
            type: 'boolean',
            description: 'get year'
        },
        'params2': {
            alias: ['m', 'month'],
            type: 'boolean',
            description: 'get  month'
        },
        'params3': {
            alias: ['d', 'date'],
            type: 'boolean',
            description: 'get  date'
        },
    }).argv;


    