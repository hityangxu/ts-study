/**
 * Created by yangxu on 16-10-23.
 */
interface GenericInerface<T> {
    (args: T): T;
}

function f<T>(args: T): T {
    return args;
}

let func: GenericInerface<number> = f;

func(1);