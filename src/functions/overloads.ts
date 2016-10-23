/**
 * Created by yangxu on 16-10-23.
 */

function add(x: number):number;
function add(x: string): number;
function add(x: any): number {
    if (typeof x === 'string') {
        return 0;
    } else {
        return 1;
    }
}