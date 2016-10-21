/**
 * Created by yangxu on 16-10-22.
 */

interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}


function getCounter(): Counter {
    // let counter = function() {} as Counter; //ERROR
    let counter = function(start: number) {} as Counter;
    return counter;
}


let counter = getCounter();

counter.reset();
