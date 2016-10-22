/**
 * Created by yangxu on 16-10-23.
 */

let add: (x: number, y: number) => number = function(x: number, y:number) {
    return x + y;
};

let printNumber: (x: number) => void = function(x: number) {
    console.log(x);
};
//
// let printNumber: (x: number, y: number) => void = function(x, y) {
//     console.log(x, y);
// };

let minus: (x: number, y: number) => number = function(x, y) {
    return x - y;
};

printNumber(1);

print();