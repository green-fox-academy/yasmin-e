
// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error
// .

// @ts-ignore
const fs = require('fs');

function countLines (fileName: string) {
    return fs.readFileSync(fileName, 'utf-8').split('\n');
}
try {
    console.log(countLines('my-file.txt').length);
}
catch (e) {
    console.log("0");
}