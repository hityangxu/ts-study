/**
 * Created by yangxu on 16-10-22.
 */

abstract class Person {
    name: string;


    constructor(name: string) {
        this.name = name;
    }

    abstract work: void;
}

// let engineer = new Person('Yang xu');