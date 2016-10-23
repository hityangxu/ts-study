/**
 * Created by yangxu on 16-10-23.
 */
class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    move = function(x: number) {
        console.log(x);
    }
}

class Horse extends Animal{

    constructor(name: string) {
        super(name);
    }

}

let move: <T extends Animal> (t: T) => void = function(t) {
    t.move();
};

move(new Horse('horse'));