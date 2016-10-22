/**
 * Created by yangxu on 16-10-23.
 */

let pringName: (firstName: string, ...restNames: string[]) => void = function(firstName: string, ...restNames: string[]) {
   console.log(firstName, restNames);
};