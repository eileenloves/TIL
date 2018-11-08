const path = require('path');

console.log(typeof __filename);
const pathobj = path.parse(__filename);
console.log(pathobj);