const process = require("process");

console.log(process.argv); // [ '/usr/bin/node', '/home/faizanshaikh/Desktop/Day13/process' ] will give an array

process.stdout.write("What is your name :" ); // standard output

process.stdin.on("data", (answer) => {   // standard input
    console.log(answer.toString().trim());
    process.exit();
});
