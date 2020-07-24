// Write a function that is able to manipulate a file
// By writing your name into it as a single line
// The file should be named "my-file.txt"
// In case the program is unable to write the file,
// It should print the following error message: "Unable to write file: my-file.txt"
// @ts-ignore
const fs = require('fs');

function manipulate (fileName: string, myName: string) {
    fs.readFileSync(fileName,  'utf-8');
    fs.writeFileSync(fileName, myName);
}
try {
    manipulate('my-file.txt', 'Yasmine');
}
catch (e) {
    console.log('Unable to write file: my-file.txt')
}
