// -  Create an array variable named `animals`
//    with the following content: `["koal", "pand", "zebr"]`
// -  Add all elements an `"a"` at the end
'use strict';
let animals: string[] = ['koal', 'pand', 'zebr'];
let letterA: string= "a";

animals.forEach(function (item, index) {
    console.log(item+letterA);
});
