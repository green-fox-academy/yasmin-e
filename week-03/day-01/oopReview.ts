/*                                                     OBJECT ORIENTED PROGRAMMING REVIEW
- What is OOP?
    OOP is a paradigm that is concerned mainly with the way that code is
    organized.
    It gives us classes and other tools to group similar things together.

- Do we have other paradigms?
    Yes, we have different paradigms. Moreover languages can follow more
    paradigms.
    eg.: functional (filter, map, etc something that returns a value), procedural (what we were using until now), etc..

- Is OOP the best?
    No, there is no best paradigm. It depends on the given problem, environment
    and sometimes taste.
    comparison: Stateful - Stateless

- What is a class?
    It is a blueprint (design plan, shape of an object). It tells what makes something a "thing".
    You can use that blueprint to create different instances of that class.
    They will behave the same but their properties will differ.

    Think them as real blueprints, you can build white, red any colored house
    from the same blueprint, you can change even the windows, but the sizes will
    be the same and you can enter the building the same way.

    Since it is a concept, its name is always singular!!!

- What is the constructor?
    A method of the class. Automatically called when you create an object by using the
    'new' keyword + the class name.
    Usually we assign value to the object variables, we initialize the
    object in the constructor.
*/

class Carr {
    public brandName: string;
    constructor(brandName: string) {
        this.brandName = brandName;
    }
}
const myCar = new Carr('Volkswagen');
// 'this.name' is a parameter and 'name' is the property. 
//  They don't have to be called the same but it's better practice to do so.
//  add 'public' even though it's default for PROPS but not for METHODS (get, set, etc).

/*
- What does the 'this' keyword mean?
    It references to the current object values, you can use it to access your props and
    methods.

- What is the difference between classes and objects?
    The class is the blueprint, the object/instance is a concrete example of that concept. 
    object = on its own, doesn't NEED a class.
    instance = object that is explicitly related to a class.

- What are fields, props?
    Common properties to all instances of a class that CAN have different values.     

- What are the methods?
    These are the actions (f(x)) that can be applied to or performed by the instance. 
    These functions will change the instance's current state or will interact with
    other objects/instances.Change should never be introduced directly on an object's variable, 
    we use methods to introduce change.

- What is `private` and `public`?
    If you set a property to private, it won't exist for the outer world. It is
    accessible only within the class.
     - You need getters and setters to modify their values
     - Public means there is no restriction on the property, anybody can access

- What is encapsulation?
    In order to keep the internal consistency, you have to hide your internal
    state.
      - If a Car is driven, the fuelLevel is decreasing and the runKms is
      increasing. If the runKms would be public you would be able to change it
      without lowering the fuelLevel.
      - If you have a bank account, you need a transaction to change the
        balance. If the balance would be public it could be editable without any
        history.

    Sometimes you want to hide a complex system from the users, because they
    don't want to deal with implementation details.
     - You don't know how an array stores its values. You just call the function
     on it.

- How does the SRP come up in OOP?
    SRP: It means one thing must do only one thing. This is not the right
    definition but it is a good start.
    In OOP each class must deal with only one topic/thing. It should not write
    files and calculate complex logic.
    Indicator: too many properties, the properties are used in different
    methods.

- What is a class variable?
    It is defined on the class, not on the instances. You remember only one
    class exists, so in this case we will have only one variable.
    Each instance will have the same variable, so if one changes it, all the
    other instances will point to the new value.
    Eg. A counter which counts how many instances have been created from the
    class.

- What does the 'static' keyword do?
    The static members of a class are accessed using the class name and dot 
    notation, without creating an object e.g. <ClassName>.<StaticMember>. 

- How can I use classes from other files?
    First the class must be exported by the export keyword.
      export class Something {}
      export default class Something {}
    When you export a class then it will be available from outside of your file.
    An exported class can be imported by the import keyword.
      import Something from "..."  - if it is exported as default
      import { Something } from "..." - if it is exported normally
*/