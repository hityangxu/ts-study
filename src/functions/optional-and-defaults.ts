/**
 * Created by yangxu on 16-10-23.
 */
let printName = function(firstName: string, lastName?: string): void {
    console.log(firstName);
};

let printNameWithDefaultParameter = function(firstName: string, lastName: string = 'Yang') {
    console.log(firstName + ' ' + lastName);
};

printNameWithDefaultParameter("xu", undefined);