'use strict';
//indexOf: duh
console.log("hello".indexOf("e"));
console.log("hello".indexOf("ee"));

//replace: duh
console.log("helloe".replace("ll", "rr"));

//split: splits the text and makes it an arr
console.log("My name is Adam".split(" ").reverse().join(" "));
console.log(("My name is Adam").split(" "));

//slice: slices a part off your string and gives it to you
console.log("yo i'm yas".slice(3));
console.log("yo i'm yas".slice(-5));

//substring: cuts a part and gives you what you cut

//chartAt: you say an index and you get the character at that index
console.log("hello".charAt(1));

//concat: adding two strings together
console.log("yo".concat("lol"));


/* OBJECTS */
//store information that comes in diff types
let user: Object= {
    username: string,
    password: string,
    age: number,
    favColors: string[],
} = { 
    username: "Gooby",
    password: "verysecure",
    age: 22,
    favColors: ["orange", "green", "blue"]
}
//objects have keys and values ex. key: username, value: "Gooby"



//diff between passing by value or passing by reference
//in this case we're just passing a value
//(passing by value (copy of the variable))
function changeNumber(number:number) {
    number = 5;
}
let inputNumber = 10;
changeNumber(inputNumber);
console.log(inputNumber);

//here we're changing an object's internal structure and it will change the
//outsie object too (passing by reference (to the oj object))
function changeObject(object:any) {
    object.password = 'pony';
}
changeObject(user);
console.log(user);

//destructuring assignment
//lets you use a part of an object without changing all of it
function changeObject1(object:any) {
    let { password } = object;
    object.password = 'pony';
    console.log(password);
    console.log(password + "fhfrdjks");  
};

//accessing things into objects
//1* objectname.key ex. user.username
//2* user['username']
//3* let { username } = object; (destructuring assignment)