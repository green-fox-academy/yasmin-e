'use strict';
import { Sharpie } from './sharpie'
/*Reuse your Sharpie class
Create SharpieSet class
it contains a list of Sharpie
countUsable() -> sharpie is usable if it has ink in it
removeTrash() -> removes all unusable sharpies*/

class SharpieSet {
    sharpieSet : Sharpie[];
    constructor(sharpieSet: Sharpie[] = []) {
        this.sharpieSet = sharpieSet;
    }

   countUsable() {   
       let UsableSharpies = this.sharpieSet.filter(function (sharpie) {
           if (sharpie.inkAmount !== 0) {
                return sharpie;  
            }
        });
        console.log(`There are ${UsableSharpies.length} usable Sharpies in this set.`);
    }

   removeTrash() {   
    let UsableSharpies = this.sharpieSet.filter(function (sharpie) {
        if (sharpie.inkAmount !== 0) {
            return sharpie;  
        }
    });
    this.sharpieSet = UsableSharpies;
    console.log(`All the unusable Sharpies have been removed.`)
    }
}

let SS = new SharpieSet([
    new Sharpie('Red', 2, 10),
    new Sharpie('Yellow', 0.7, 12),
    new Sharpie('Green', 1.5, 0),
    new Sharpie('Black', 1.5, 0)
]);
console.log(SS.sharpieSet);
SS.countUsable();
SS.removeTrash();
console.log(SS.sharpieSet);