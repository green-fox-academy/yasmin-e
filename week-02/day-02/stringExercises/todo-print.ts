// Add "My todo:" to the beginning of the todoText
// Add " - Download games" to the end of the todoText
// Add " - Diablo" to the end of the todoText but with indention

// Expected output:

// My todo:
//  - Buy milk
//  - Download games
//      - Diablo

const todoText = ' - Buy milk\n';

console.log(todoText);
console.log('My todo:\n'.concat(todoText).concat(' - Download games\n\t').concat('- Diablo'));
