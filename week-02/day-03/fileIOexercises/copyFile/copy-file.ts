// Write a function that copies the contents of a file into another
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful
// @ts-ignore
const fs = require('fs');
function copyContent (fileName1: string, fileName2: string) {
    let content: string = fs.readFileSync(fileName1, 'utf-8');
    fs.writeFileSync(fileName2, content);
    if (fs.existsSync(fileName2)) {
        return true;
    }
}
copyContent('file1.txt', 'file2.txt');