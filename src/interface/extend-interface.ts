/**
 * Created by yangxu on 16-10-22.
 */

interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number;
    color: string;
}

interface Square extends Shape, PenStroke {
    sideLength: number;
}

let square = {} as Square;