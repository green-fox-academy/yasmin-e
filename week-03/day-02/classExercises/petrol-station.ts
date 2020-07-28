'use strict';
/*Create a Station and a Car classes
Station
gasAmount
refill(car) -> decreases the gasAmount by the capacity of the car and increases the cars gasAmount
Car
gasAmount
capacity
create constructor for Car where:
initialize gasAmount -> 0
initialize capacity -> 100*/
class Station {
    gasAmount: number;
    constructor(gasAmount: number = 5000) {
        this.gasAmount = gasAmount;
    }
    refill(car) {
        this.gasAmount = this.gasAmount - car.capacity;
        car.gasAmount++;
    }
}

class Car {
    gasAmount: number;
    capacity: number;
    constructor(gasAmount: number = 0, capacity: number = 100) {
        this.gasAmount = gasAmount;
        this.capacity = capacity;
    }
}

let Mazda = new Car();
let Esso = new Station();
Esso.refill(Mazda);
console.log(Esso.gasAmount);
console.log(Mazda.gasAmount);
console.log(Mazda.capacity);