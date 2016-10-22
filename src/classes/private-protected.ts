/**
 * Created by yangxu on 16-10-22.
 */

class Animal {
    private name: string;
    protected age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class Horse extends Animal{

    constructor(name: string, age: number) {
        super(name, age);
    }
}