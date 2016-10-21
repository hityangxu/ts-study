/**
 * Created by yangxu on 16-10-22.
 */
interface Point {
    readonly x: number;
    readonly y: number;
}

let point: Point = {x: 1, y: 2};

// point.x = 1; ERROR

console.log(point);

let a: ReadonlyArray<number> = [0, 1, 2];
// a[1] = 2; ERROR

console.log(a);

