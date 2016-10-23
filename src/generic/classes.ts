/**
 * Created by yangxu on 16-10-23.
 */

class GenericClass<T> {
    prop: T;

    add: (x: T, y: T) => T;
}

let cls = new GenericClass<number>();
cls.add(1, 2);

