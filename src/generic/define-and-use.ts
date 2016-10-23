/**
 * Created by yangxu on 16-10-23.
 */

function identify<T>(arg: T): T {
    return arg;
}

let result = identify<string>("string");
let auto = identify("string");

console.log(result, auto);