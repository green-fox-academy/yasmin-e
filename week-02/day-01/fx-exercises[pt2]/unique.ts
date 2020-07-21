//  Create a function that takes a list of numbers as a parameter
//  Returns a list of numbers where every number in the list occurs only once
let listofNum: number[] = [23, 10, 95, 95, 95, 66, 66, 22, 10];

function unique (input: number[]) {
  return [...new Set(input)];
};

function uniqueWithLoop (input: number[]) {
   let result: number[] = [];
   // .forEach is for going through all the values of the arr
   input.forEach(function (number: number) {
      //number => is the same as function (number: number)
      let alreadyInResult = false;
      result.forEach ((resultNumber:number) => {
         if (resultNumber === number)
         alreadyInResult = true;
      }
   });
   if(!alreadyInResult) {
      result.push(number);
   }
   return result;
};

unique(listofNum);