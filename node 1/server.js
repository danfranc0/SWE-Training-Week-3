// 1) node runs on server, not browser
// 2) console is the terminal window
console.log("Hello World");
// 3) global object instead of window object
//console.log(global);
// 4) common core modules
// 5) CommonJS modules instead of ES6 modules
// 6) missing some JS APIs like fetch

const os = require('os');
const path = require('path');
const { add, sub, mul, div } = require('./math');

console.log(add(2, 3));
console.log(sub(2, 3));
console.log(mul(2, 3));
console.log(div(2, 3));

console.log(os.type());
console.log(os.version());
console.log(os.homedir());

console.log(__dirname);
console.log(__filename);

console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));

console.log(path.parse(__filename));