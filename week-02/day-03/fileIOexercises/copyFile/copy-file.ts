// Write a function that copies the contents of a file into another
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

import fs from 'fs';

function copyContent(sourceFile: string, targetFile: string) {
  const content: string = fs.readFileSync(sourceFile, 'utf-8');
  fs.writeFileSync(targetFile, content);
  if (fs.existsSync(targetFile)) {
    return true;
  }
  return false;
}
copyContent('file1.txt', 'file2.txt');
