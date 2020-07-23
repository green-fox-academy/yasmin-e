
let Grout = {};

function EmptyOrNot (input:any) {
    if (Object.keys(input).length == 0) {
        return true;
    }
    else {
        return false;
    } 
};

if (EmptyOrNot(Grout) == true) {
    console.log("This object is empty");
}
else {
    console.log("This object is not empty");
}


Grout = {
    97:	"a",
    98:	"b",
    99:	"c",
    65:	"A",
    66:	"B",
    67:	"C"
};
console.log(Object.keys(Grout));
console.log(Object.values(Grout));

Grout[68] = "D";

console.log(Object.keys(Grout).length + " pairs");
console.log(Grout[99]);

delete Grout[97];

function NoValue (object: any, key: any) {
    if (object[key] == null) {
        return true;
    }
    else {
        return false;
    }
};

if (NoValue(Grout, 100) == true) {
    console.log("There is no value assigned to this key. Sorry!")
}
else {
    console.log("There seems to be a value associated with this key.")
};

Grout = Grout.toString().slice(0, 0);
console.log(Grout);