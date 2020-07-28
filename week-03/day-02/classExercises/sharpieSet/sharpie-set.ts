'use strict';
import { Sharpie } from './sharpie'
/*Reuse your Sharpie class
Create SharpieSet class
it contains a list of Sharpie
countUsable() -> sharpie is usable if it has ink in it
removeTrash() -> removes all unusable sharpies*/

class SharpieSet {

    main(): Sharpie[] {
        let mySharpieSet: Sharpie[] = [
            new Sharpie('Red', 2, 10),
            new Sharpie('Yellow', 0.7, 12),
            new Sharpie('Green', 1.5, 0),
            new Sharpie('Black', 1.5, 0)
        ];
        return mySharpieSet;
    }

   countUsable(): number {
       let AllSharpies = this.main();   
       let UsableSharpies = AllSharpies.filter(function (sharpie) {
           if (sharpie.inkAmount !== 0) {
                return sharpie;  
            }
        });
        return UsableSharpies.length;
    }

   removeTrash(): Sharpie[] {
    let AllSharpies = this.main();   
    let UsableSharpies = AllSharpies.filter(function (sharpie) {
        if (sharpie.inkAmount !== 0) {
            return sharpie;  
        }
    });
    return UsableSharpies;
    }
}

let SS = new SharpieSet();
console.log(SS.main());
console.log(SS.countUsable());
console.log(SS.removeTrash());