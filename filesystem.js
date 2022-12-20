const fs = require("fs");
const path = require("path");

fs.writeFileSync("read.txt", "Hello from filesystem module");
// will create a read.txt and send a text 
fs.writeFileSync("read.txt", "Hello from filesystem module, will replace the first read file" + "\n");


fs.appendFileSync("read.txt", "The append module will add text to the read file without replacing the previous text");


const buf_data = fs.readFileSync("read.txt");
console.log(buf_data);
// Output <Buffer 48 65 6c 6c 6f 20 66 72 6f 6d 20 66 69 6c 65 73 79 73 74 65 6d 20 6d 6f 64 75 6c 65 2c 20 77 69 6c 6c 20 72 65 70 6c 61 63 65 20 74 68 65 20 66 69 72 ... 97 more bytes>
// Node.js includes additional datatype called buffer
// used mainly to store binary data
const result = buf_data.toString();
console.log(result);


// To rename a file
fs.renameSync("read.txt", "readWrite.txt");

const readStream = fs.createReadStream("readWrite.txt");
readStream.on("data", (chunk) => {
    console.log(chunk.toString())
    fs.appendFileSync(__dirname + "/file.txt", chunk)
})
console.log(__dirname)


const writeStream = fs.createWriteStream("newTxt.txt");
writeStream.write("This is a text file");
console.log(writeStream);