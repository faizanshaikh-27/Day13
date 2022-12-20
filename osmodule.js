const os = require ("os");

console.log(os.arch()); // architecture os operating system x32, x64
console.log(os.hostname()); // shows desktop name
console.log(os.platform()); // shows operating system
console.log(os.tmpdir()); // shows temp file directory
console.log(os.type());


console.log(os.freemem()); // shows available ram 

const freeMemory = os.freemem();
console.log(`${freeMemory/1024/1024/1024}`); // Shows in gigabyte

const totalMemory = os.totalmem();
console.log(`${totalMemory/1024/1024/1024}`); // Shows in gigabyte
