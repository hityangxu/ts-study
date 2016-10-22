/**
 *
 * Created by yangxu on 16-10-22.
 */

class Greeter {
    greeting: string;

    constructor(greeting: string) {
        this.greeting = greeting;
    }

    greet() {
        return `hello, ${this.greeting}`;
    }
}

let greeter = new Greeter('world');
