// import와 같은 기능, 우선순위

// const fs = require('fs');
// const express = require('express');
const sum = require('./utility');  // = const sum = function(numbersToSum=[]){ }
// const dbconfig = require('./configs/database.json');
// const sum = require('./routes/'); //다른 dir (안에 있는 file 자동으로 가져옴)

const total = sum([100,200,300]);

console.log(total);
console.log(sum([1,2,3]));