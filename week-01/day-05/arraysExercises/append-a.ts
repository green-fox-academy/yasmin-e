// -  Create an array variable named `animals`
//    with the following content: `["koal", "pand", "zebr"]`
// -  Add all elements an `"a"` at the end

const animals: string[] = ['koal', 'pand', 'zebr'];
const letterA = 'a';

animals.forEach((item, index) => {
  console.log(item + letterA);
});
