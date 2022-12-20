const path = require ("path");

// directory path
console.log(path.dirname('/home/faizanshaikh/Desktop/Day13/pathmodule.js'));

// extention name (.js)
console.log(path.extname('/home/faizanshaikh/Desktop/Day13/pathmodule.js'));

// file name (pathmodule.js)
console.log(path.basename('/home/faizanshaikh/Desktop/Day13/pathmodule.js'));

// everything from all above
console.log(path.parse('/home/faizanshaikh/Desktop/Day13/pathmodule.js'));

const parsePath = path.parse('/home/faizanshaikh/Desktop/Day13/pathmodule.js');
console.log(parsePath.name);
console.log(parsePath.dir);
console.log(parsePath.base);


