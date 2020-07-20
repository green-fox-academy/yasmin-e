//  Create a function that takes a list of numbers as a parameter
//  Returns a list of numbers where every number in the list occurs only once
let listofNum: number[] = [23, 10, 95, 95, 95, 66, 66, 22, 10];

function unique (listofNum: number[]) {
   console.log([...new Set(listofNum)]);
};

unique (listofNum);
unique (listofNum);
unique (listofNum);
unique (listofNum);