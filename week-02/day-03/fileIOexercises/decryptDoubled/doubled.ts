// Create a method that decrypts duplicated-chars.txt
// @ts-ignore
const fs = require('fs');
function decrypt (fileName: string) {
    let content: string[] = fs.readFileSync(fileName, 'utf-8').split('');
    for (let i: number = 0; i<content.length; i = i + 2) {
        content[i] = '';
    }
    fs.writeFileSync(fileName, content.join(''));
}
decrypt('duplicated-chars.txt');


/*
functional programming  method to solve the case with map

let reading = fs.readFileSync('duplicated-chars.txt','utf-8').split('').map(function (value:string,index:number) {
if (index%2==0){
    return value;
}
}).join('');

//console.log(reading);


functional programming  method to solve the case with filter

let readingFilter = fs.readFileSync('duplicated-chars.txt','utf-8').split('').filter(function (value:string,index:number) {
    if (index%2==0){
        return value;
    }
}).join('');

console.log(reading);
 */