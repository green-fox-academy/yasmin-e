// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

function divideTen (x: number) {
    if (x == 0) {
        throw new Error('Fail');
    }
    console.log(10/x);
}
divideTen(15);
try {
    divideTen(0);
}
catch(e) {
    console.log(e.message);
}