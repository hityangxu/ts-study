/**
 * Created by yangxu on 16-10-22.
 */

class Animal {
    name: string;


    constructor(name: string) {
        this.name = name;
    }

    move(distance: number = 0) {
        console.log(`${this.name} moved ${distance} meters`);
    }
}

class Snake extends Animal {

    constructor(name: string) {
        super(name);
    }


    move(distance = 5): any {
        console.log("snake is moving...");
        return super.move(distance);
    }
}

let snake = new Snake('ya');
snake.move();