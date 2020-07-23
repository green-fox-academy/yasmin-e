let O = {
    '978-1-60309-452-8': 'A Letter to Jo',
    '978-1-60309-459-7': 'Lupus',
    '978-1-60309-444-3': 'Red Panda and Moon Bear',
    '978-1-60309-461-0': 'The Lab'
};

for (const [key, value] of Object.entries(O)) {
    console.log(`${value} (ISBN: ${key})`);
  };

delete O["978-1-60309-444-3"];
delete O["978-1-60309-461-0"];
console.log(O);


O['978-1-60309-450-4'] = 'They Called Us Enemy';
O['978-1-60309-453-5'] = 'Why Did We Trust Him?';
console.log(O);

function NoValue (object: any, key: any) {
    if (object[`${key}`] == null) {
        return true;
    }
    else {
        return false;
    }
};
if (NoValue(O, 478-0-61159-424-8) == true) {
    console.log("There is no value assigned to this key. Sorry!")
}
else {
    console.log("There seems to be a value associated with this key.")
};

console.log(O['978-1-60309-453-5']);