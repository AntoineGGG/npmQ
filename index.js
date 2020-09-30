





const obj = require('./information.js');
console.log(obj);

const {say} = require('cowsay');
const message = say({text:`${obj.name} du campus de  ${obj.campus}`});

console.log(message);

