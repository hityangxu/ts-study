/**
 * Created by yangxu on 16-10-22.
 */

interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc = function(source: string, subString: string) {

    return true;
};