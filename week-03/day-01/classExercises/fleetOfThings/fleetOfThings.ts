import { Thing } from './thing';
import { Fleet } from './fleet';

// -  You have the `Thing` class
// -  You have the `Fleet` class
// -  Create the `FleetOfThings` class with a `main` method
// -  Download those, use those
// -  In the `main` method create a fleet
// -  Achieve this output:
//  Crete a fleet of things to have this output:

// 1. [ ] Get milk
// 2. [ ] Remove the obstacles
// 3. [x] Stand up
// 4. [x] Eat lunch

// Hint: You have to create a `print()` method as well 

class FleetOfThings {
    main() {
        //declaring a new Fleet object and storing it in a variable to be able to apply the add() function from fleet.ts
        let fleet = new Fleet();
       
        //calling a simple add function to add a new thing to the fleet (fleet.add(new Thing('name')))
        fleet.add(new Thing('Get milk'))
        fleet.add(new Thing('Remove the obstacles'))
        
        //declaring a Thing object and storing it in a variable to be able to apply the complete() function from thing.ts
        let standUp = new Thing('Stand up');
        standUp.complete();
        fleet.add(standUp);
        
        let eatLunch = new Thing('Eat lunch');
        eatLunch.complete();
        fleet.add(eatLunch);
        
        //returning all the things
        return fleet.getThings();
    }
    print() {
        //storing all the things in a variable to be able to use it 
        let AllThings = this.main();

        //iterating through the array of things to fix the format
        AllThings.forEach(function (thing, index) {
            let string1 = ' ';
            if (thing.getCompleted()) {
                string1 = 'x';
            }
            console.log(`${index + 1}. [${string1}] ${thing.getName()}`)
        })
    }
}
//declaring a new FleetOfThings object and applying the print function
let fot = new FleetOfThings();
fot.print();